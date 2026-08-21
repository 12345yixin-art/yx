import type { MetadataRoute } from "next";
import { getAiaFundPaths } from "@/data/aia-funds";
import { getAllInsightPaths } from "@/data/insights";
import { absoluteUrl } from "@/lib/site";

const routes = [
  "/en",
  "/en/about",
  "/en/services",
  "/en/funds",
  "/en/insights",
  "/en/faq",
  "/en/contact",
  "/en/privacy",
  "/en/terms",
  "/en/risk-disclosure",
  "/en/disclaimer",
  "/zh",
  "/zh/about",
  "/zh/services",
  "/zh/funds",
  "/zh/insights",
  "/zh/faq",
  "/zh/contact",
  "/zh/privacy",
  "/zh/terms",
  "/zh/risk-disclosure",
  "/zh/disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const insightArticleRoutes = getAllInsightPaths().map(
    ({ locale, slug }) => `/${locale}/insights/${slug}`,
  );
  const fundRoutes = getAiaFundPaths().map(
    ({ locale, slug }) => `/${locale}/funds/${slug}`,
  );

  return [...routes, ...insightArticleRoutes, ...fundRoutes].map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: route === "/en" || route === "/zh" ? "weekly" : "monthly",
    priority: route === "/en" || route === "/zh" ? 1 : 0.7,
  }));
}
