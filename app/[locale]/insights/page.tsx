import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InsightsPageContent } from "@/components/insights/InsightsPageContent";
import { insightHubCopy } from "@/data/insights";
import { isLocale, type Locale } from "@/lib/i18n";
import { sharedOpenGraphImages } from "@/lib/seo";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const meta = insightHubCopy[locale].meta;

  return {
    title: {
      absolute: meta.title,
    },
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      locale: locale === "zh" ? "zh_CN" : "en_US",
      images: sharedOpenGraphImages,
    },
    alternates: {
      canonical: `/${locale}/insights`,
      languages: {
        en: "/en/insights",
        "zh-Hans": "/zh/insights",
      },
    },
  };
}

export default async function InsightsPage({ params }: PageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;

  return <InsightsPageContent locale={locale} />;
}
