import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FundDetailPageContent } from "@/components/funds/FundDetailPageContent";
import { getAiaFund, getAiaFundPaths } from "@/data/aia-funds";
import { getAiaFundDisplayData } from "@/lib/aia/server";
import { isLocale, type Locale } from "@/lib/i18n";
import { sharedOpenGraphImages } from "@/lib/seo";
import { getDictionary } from "@/messages";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return getAiaFundPaths();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const fund = getAiaFund(slug);

  if (!fund) {
    notFound();
  }

  const title =
    locale === "zh"
      ? `${fund.officialName} | ARK Legacy Partner`
      : `${fund.officialName} | ARK Legacy Partner`;
  const description =
    locale === "zh"
      ? `${fund.officialName} 的基金资料、最新可用 NAV 与估值日期，资料来源为 AIA Malaysia。`
      : `${fund.officialName} fund information, latest available NAV and valuation date sourced from AIA Malaysia.`;

  return {
    title: {
      absolute: title,
    },
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === "zh" ? "zh_CN" : "en_US",
      images: sharedOpenGraphImages,
    },
    alternates: {
      canonical: `/${locale}/funds/${slug}`,
      languages: {
        en: `/en/funds/${slug}`,
        "zh-Hans": `/zh/funds/${slug}`,
      },
    },
  };
}

export default async function FundPage({ params }: PageProps) {
  const { locale: localeParam, slug } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const fund = getAiaFund(slug);

  if (!fund) {
    notFound();
  }

  const locale: Locale = localeParam;
  const dictionary = getDictionary(locale);
  const fundData = await getAiaFundDisplayData(fund);

  return <FundDetailPageContent dictionary={dictionary} fundData={fundData} locale={locale} />;
}
