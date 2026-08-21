import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FundOverviewPageContent } from "@/components/funds/FundOverviewPageContent";
import { getAllAiaFundDisplayData } from "@/lib/aia/server";
import { isLocale, type Locale } from "@/lib/i18n";
import { sharedOpenGraphImages } from "@/lib/seo";
import { getDictionary } from "@/messages";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);
  const meta = dictionary.funds.overview;

  return {
    title: {
      absolute: meta.metaTitle,
    },
    description: meta.metaDescription,
    openGraph: {
      title: meta.metaTitle,
      description: meta.metaDescription,
      type: "website",
      locale: locale === "zh" ? "zh_CN" : "en_US",
      images: sharedOpenGraphImages,
    },
    alternates: {
      canonical: `/${locale}/funds`,
      languages: {
        en: "/en/funds",
        "zh-Hans": "/zh/funds",
      },
    },
  };
}

export default async function FundsPage({ params }: PageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const dictionary = getDictionary(locale);
  const funds = await getAllAiaFundDisplayData();

  return <FundOverviewPageContent dictionary={dictionary} funds={funds} locale={locale} />;
}
