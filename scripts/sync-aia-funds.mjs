import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

/*
 * Automated access relies on the structure and continued public availability of
 * AIA Malaysia's fund pages. Production use should be reviewed against AIA's
 * applicable website terms, robots policy, and internal/compliance requirements.
 * This is not an AIA-supported integration and does not use undocumented API
 * endpoints, credentials, authentication bypasses, CAPTCHA bypasses, or access
 * control circumvention.
 */

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const latestSnapshotPath = path.join(projectRoot, "data", "aia-funds-latest.json");
const historySnapshotPath = path.join(projectRoot, "data", "aia-fund-history-latest.json");

const funds = [
  {
    slug: "aia-infinite-dividend-focus-usd",
    fundCode: "AIDU",
    fundName: "AIA Infinite Dividend-Focus USD Fund",
    currency: "USD",
    sourceUrl:
      "https://www.aia.com.my/en/about-aia/financial-investment-info/investment-linked-funds/fund-info/details.html?currency=USD&id=AIDU&pt=AIA+Infinite+Dividend-Focus+USD+Fund",
  },
  {
    slug: "aia-infinite-dividend-focus-sgd",
    fundCode: "AIDS",
    fundName: "AIA Infinite Dividend-Focus SGD Fund",
    currency: "SGD",
    sourceUrl:
      "https://www.aia.com.my/en/about-aia/financial-investment-info/investment-linked-funds/fund-info/details.html?currency=SGD&id=AIDS&pt=AIA+Infinite+Dividend-Focus+SGD+Fund",
  },
];

const selectors = {
  fundDetails: "#cmp-myinvestmentfund-root--fundDetails",
  fundName: "#cmp-myinvestmentfund-root--fundDetails .cmp-myinvestmentfund--details-title h2",
  priceBlock: "#cmp-myinvestmentfund-root--fundDetails .cmp-myinvestmentfund--details-price",
  historyTables:
    "#cmp-myinvestmentfund-root--fundHist .cmp-myinvestmentfund--history-tables table.table.table-hover tbody tr",
};

const pageTimeoutMs = 30000;

async function main() {
  const previousLatest = await readJson(latestSnapshotPath, []);
  const previousHistory = await readJson(historySnapshotPath, {});
  const checkedAt = new Date().toISOString();
  const browser = await chromium.launch({
    headless: process.env.AIA_SYNC_HEADLESS !== "false",
  });
  const latestSnapshot = [];
  const historySnapshot = { ...previousHistory };

  try {
    for (const fund of funds) {
      const parsed = await readFundPage(browser, fund);
      const previous = previousLatest.find((item) => item.fundCode === fund.fundCode);
      const changed =
        !previous ||
        previous.nav !== parsed.latest.nav ||
        previous.valuationDate !== parsed.latest.valuationDate;

      latestSnapshot.push({
        ...parsed.latest,
        checkedAt: changed ? checkedAt : previous.checkedAt,
      });

      if (parsed.history.length > 0) {
        historySnapshot[fund.slug] = parsed.history;
      }

      console.log(
        `${fund.fundCode}: ${parsed.latest.currency} ${parsed.latest.nav} as at ${parsed.latest.valuationDate}`,
      );
      console.log(`${fund.fundCode}: parsed ${parsed.history.length} historical NAV rows`);
    }
  } finally {
    await browser.close();
  }

  latestSnapshot.sort((a, b) => a.fundCode.localeCompare(b.fundCode));
  await mkdir(path.dirname(latestSnapshotPath), { recursive: true });
  await writeJson(latestSnapshotPath, latestSnapshot);
  await writeJson(historySnapshotPath, orderHistorySnapshot(historySnapshot));
}

async function readFundPage(browser, fund) {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1200 },
    userAgent:
      "Mozilla/5.0 (compatible; ARKLegacyPartner/1.0; public fund page availability check)",
  });

  try {
    await page.goto(fund.sourceUrl, {
      waitUntil: "domcontentloaded",
      timeout: pageTimeoutMs,
    });
    await page.waitForSelector(selectors.fundDetails, {
      state: "attached",
      timeout: pageTimeoutMs,
    });
    try {
      await page.waitForFunction(
        ({ fundDetails, expectedCurrency }) => {
          const element = document.querySelector(fundDetails);
          const text = element?.innerText || element?.textContent || "";
          return text.includes(expectedCurrency) && /\d+\.\d+/.test(text) && /Valuation Date/.test(text);
        },
        { fundDetails: selectors.fundDetails, expectedCurrency: fund.currency },
        { timeout: pageTimeoutMs },
      );
    } catch (error) {
      throw new Error(`${fund.fundCode}: rendered public fund details did not become readable. ${await pageDiagnostics(page)}`, {
        cause: error,
      });
    }

    const latest = await page.evaluate(
      ({ expected, selectors }) => {
        const name =
          document.querySelector(selectors.fundName)?.innerText?.trim().replace(/\s+/g, " ") || "";
        const detailsElement = document.querySelector(selectors.fundDetails);
        const priceElement = document.querySelector(selectors.priceBlock);
        const detailsText =
          (detailsElement?.innerText || detailsElement?.textContent || "").trim().replace(/\s+/g, " ");
        const priceText =
          (priceElement?.innerText || priceElement?.textContent || "").trim().replace(/\s+/g, " ");
        const priceMatch = priceText.match(new RegExp(`${expected.currency}\\s*(\\d+(?:\\.\\d+)?)`));
        const valuationMatch = detailsText.match(/\b\d{1,2}\/\d{1,2}\/\d{4}\b/);

        return {
          fundCode: expected.fundCode,
          fundName: name,
          currency: expected.currency,
          nav: priceMatch?.[1] || "",
          valuationDate: valuationMatch?.[0] || "",
          sourceUrl: expected.sourceUrl,
        };
      },
      { expected: fund, selectors },
    );

    const normalizedLatest = normalizeLatest(latest, fund);
    const history = await page.evaluate((selectors) => {
      return [...document.querySelectorAll(selectors.historyTables)]
        .map((row) => [...row.querySelectorAll("td")].map((cell) => cell.textContent?.trim() || ""))
        .filter((cells) => cells.length >= 2)
        .map(([date, nav]) => ({ date, nav }));
    }, selectors);

    return {
      latest: normalizedLatest,
      history: normalizeHistory(history),
    };
  } finally {
    await page.close();
  }
}

async function pageDiagnostics(page) {
  const details = await page.evaluate((selector) => {
    const element = document.querySelector(selector);

    return {
      title: document.title,
      url: location.href,
      bodyText: document.body?.innerText?.slice(0, 500) || "",
      detailsHtml: element?.outerHTML?.slice(0, 300) || "",
    };
  }, selectors.fundDetails);

  return JSON.stringify(details);
}

function normalizeLatest(raw, expected) {
  if (raw.fundName !== expected.fundName) {
    throw new Error(`${expected.fundCode}: unexpected fund name "${raw.fundName}"`);
  }

  const nav = Number(raw.nav);
  const valuationDate = parseAiaDisplayDate(raw.valuationDate);

  if (raw.currency !== expected.currency) {
    throw new Error(`${expected.fundCode}: unexpected currency "${raw.currency}"`);
  }

  if (!Number.isFinite(nav) || nav <= 0) {
    throw new Error(`${expected.fundCode}: invalid NAV "${raw.nav}"`);
  }

  if (!valuationDate) {
    throw new Error(`${expected.fundCode}: invalid valuation date "${raw.valuationDate}"`);
  }

  return {
    fundCode: expected.fundCode,
    fundName: expected.fundName,
    currency: expected.currency,
    nav: nav.toFixed(5),
    valuationDate,
    checkedAt: new Date().toISOString(),
    sourceUrl: expected.sourceUrl,
  };
}

function normalizeHistory(rows) {
  const byDate = new Map();

  for (const row of rows) {
    const date = parseAiaDisplayDate(row.date);
    const nav = Number(row.nav);

    if (!date || !Number.isFinite(nav) || nav <= 0) {
      continue;
    }

    byDate.set(date, { date, nav: Number(nav.toFixed(5)) });
  }

  return [...byDate.values()].sort((a, b) => a.date.localeCompare(b.date));
}

function parseAiaDisplayDate(value) {
  const match = String(value).trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);

  if (!match) {
    return null;
  }

  const [, day, month, year] = match;
  const isoDate = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  const date = new Date(`${isoDate}T00:00:00.000Z`);

  return /^\d{4}-\d{2}-\d{2}$/.test(isoDate) && !Number.isNaN(date.getTime()) ? isoDate : null;
}

async function readJson(filePath, fallback) {
  try {
    return JSON.parse(await readFile(filePath, "utf8"));
  } catch {
    return fallback;
  }
}

async function writeJson(filePath, value) {
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

function orderHistorySnapshot(snapshot) {
  return funds.reduce((result, fund) => {
    result[fund.slug] = Array.isArray(snapshot[fund.slug]) ? snapshot[fund.slug] : [];
    return result;
  }, {});
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
