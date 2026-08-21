import type { AiaFundSlug } from "@/data/aia-funds";

export type FundNavPoint = {
  date: string;
  nav: number;
};

// TODO: Populate only with manually verified AIA Malaysia historical NAV data
// or an approved automated data adapter. Do not invent historical values.
export const aiaFundHistory: Record<AiaFundSlug, FundNavPoint[]> = {
  "aia-infinite-dividend-focus-usd": [],
  "aia-infinite-dividend-focus-sgd": [],
};

export function getAiaFundHistory(slug: AiaFundSlug) {
  return aiaFundHistory[slug];
}
