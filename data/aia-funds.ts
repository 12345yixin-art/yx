import type { Locale } from "@/lib/i18n";

export type AiaFundSlug =
  | "aia-infinite-dividend-focus-usd"
  | "aia-infinite-dividend-focus-sgd";

export type AiaFund = {
  slug: AiaFundSlug;
  officialName: string;
  code: string;
  currency: "USD" | "SGD";
  nav: string;
  navDate: string;
  officialUrl: string;
  verifiedSource: string;
  verificationMethod: "manual-aia-malaysia";
  manualVerifiedAt: string;
};

export const aiaFunds: AiaFund[] = [
  {
    slug: "aia-infinite-dividend-focus-usd",
    officialName: "AIA Infinite Dividend-Focus USD Fund",
    code: "AIDU",
    currency: "USD",
    nav: "1.05288",
    navDate: "2026-08-18",
    officialUrl:
      "https://www.aia.com.my/en/about-aia/financial-investment-info/investment-linked-funds/fund-info/details.html?currency=USD&id=AIDU&pt=AIA+Infinite+Dividend-Focus+USD+Fund",
    verifiedSource: "AIA Malaysia",
    verificationMethod: "manual-aia-malaysia",
    manualVerifiedAt: "2026-08-18T00:00:00+08:00",
  },
  {
    slug: "aia-infinite-dividend-focus-sgd",
    officialName: "AIA Infinite Dividend-Focus SGD Fund",
    code: "AIDS",
    currency: "SGD",
    nav: "1.05675",
    navDate: "2026-08-18",
    officialUrl:
      "https://www.aia.com.my/en/about-aia/financial-investment-info/investment-linked-funds/fund-info/details.html?currency=SGD&id=AIDS&pt=AIA+Infinite+Dividend-Focus+SGD+Fund",
    verifiedSource: "AIA Malaysia",
    verificationMethod: "manual-aia-malaysia",
    manualVerifiedAt: "2026-08-18T00:00:00+08:00",
  },
];

export function getAiaFund(slug: string) {
  return aiaFunds.find((fund) => fund.slug === slug);
}

export function getAiaFundPaths() {
  return ["en", "zh"].flatMap((locale) =>
    aiaFunds.map((fund) => ({
      locale,
      slug: fund.slug,
    })),
  );
}

export function formatFundDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "zh" ? "zh-CN" : "en-GB", {
    day: "numeric",
    month: locale === "zh" ? "long" : "short",
    year: "numeric",
    timeZone: "Asia/Kuala_Lumpur",
  }).format(new Date(`${date}T00:00:00+08:00`));
}
