import "server-only";
import latestSnapshot from "@/data/aia-funds-latest.json";
import historySnapshot from "@/data/aia-fund-history-latest.json";
import { aiaFunds, type AiaFund, type AiaFundSlug } from "@/data/aia-funds";
import type { FundNavPoint } from "@/data/aia-fund-history";

const source = "AIA Malaysia";

type SnapshotFundNav = {
  fundCode?: unknown;
  fundName?: unknown;
  currency?: unknown;
  nav?: unknown;
  valuationDate?: unknown;
  checkedAt?: unknown;
  sourceUrl?: unknown;
};

export type NormalizedAiaFundNav = {
  fundCode: string;
  fundName: string;
  currency: AiaFund["currency"];
  nav: string;
  valuationDate: string;
  source: string;
  fetchedAt: string;
  isFallback: boolean;
};

export type AiaFundDisplayData = {
  fund: AiaFund;
  latest: NormalizedAiaFundNav | null;
  history: FundNavPoint[];
  historyStatus: "available" | "disabled" | "unavailable";
};

export async function getAiaFundDisplayData(fund: AiaFund): Promise<AiaFundDisplayData> {
  const latest = getLatestAiaFundNav(fund);
  const history = getAiaFundHistoryFromSnapshot(fund.slug);

  return {
    fund,
    latest,
    history,
    historyStatus: history.length > 0 ? "available" : "disabled",
  };
}

export async function getAllAiaFundDisplayData() {
  return Promise.all(aiaFunds.map((fund) => getAiaFundDisplayData(fund)));
}

function getLatestAiaFundNav(fund: AiaFund): NormalizedAiaFundNav | null {
  const snapshot = Array.isArray(latestSnapshot)
    ? latestSnapshot.find((item) => item.fundCode === fund.code)
    : undefined;

  return normalizeSnapshotFund(snapshot, fund) ?? manualLatest(fund);
}

function getAiaFundHistoryFromSnapshot(slug: AiaFundSlug) {
  const history = historySnapshot[slug as keyof typeof historySnapshot];

  if (!Array.isArray(history)) {
    return [];
  }

  return history.filter(isValidHistoryPoint).sort((a, b) => a.date.localeCompare(b.date));
}

function normalizeSnapshotFund(
  snapshot: SnapshotFundNav | undefined,
  expected: AiaFund,
): NormalizedAiaFundNav | null {
  if (!snapshot) {
    return null;
  }

  const nav = typeof snapshot.nav === "string" ? Number(snapshot.nav) : Number(snapshot.nav);

  if (
    snapshot.fundCode !== expected.code ||
    snapshot.fundName !== expected.officialName ||
    snapshot.currency !== expected.currency ||
    typeof snapshot.nav !== "string" ||
    !Number.isFinite(nav) ||
    nav <= 0 ||
    typeof snapshot.valuationDate !== "string" ||
    !isIsoDate(snapshot.valuationDate) ||
    typeof snapshot.checkedAt !== "string" ||
    Number.isNaN(new Date(snapshot.checkedAt).getTime()) ||
    typeof snapshot.sourceUrl !== "string" ||
    snapshot.sourceUrl !== expected.officialUrl
  ) {
    return null;
  }

  return {
    fundCode: expected.code,
    fundName: expected.officialName,
    currency: expected.currency,
    nav: nav.toFixed(5),
    valuationDate: snapshot.valuationDate,
    source,
    fetchedAt: snapshot.checkedAt,
    isFallback: false,
  };
}

function manualLatest(fund: AiaFund): NormalizedAiaFundNav | null {
  const nav = Number(fund.nav);

  if (!Number.isFinite(nav) || nav <= 0 || !isIsoDate(fund.navDate)) {
    return null;
  }

  return {
    fundCode: fund.code,
    fundName: fund.officialName,
    currency: fund.currency,
    nav: fund.nav,
    valuationDate: fund.navDate,
    source,
    fetchedAt: fund.manualVerifiedAt,
    isFallback: true,
  };
}

function isValidHistoryPoint(point: unknown): point is FundNavPoint {
  if (!point || typeof point !== "object") {
    return false;
  }

  const candidate = point as FundNavPoint;

  return isIsoDate(candidate.date) && Number.isFinite(candidate.nav) && candidate.nav > 0;
}

function isIsoDate(value: string) {
  const date = new Date(`${value}T00:00:00.000Z`);

  return /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(date.getTime());
}
