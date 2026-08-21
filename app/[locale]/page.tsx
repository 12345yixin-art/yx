import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArkJourney } from "@/components/home/ArkJourney";
import { BrandStatement } from "@/components/home/BrandStatement";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import { EditorialInsights } from "@/components/home/EditorialInsights";
import { FundUpdates } from "@/components/funds/FundUpdates";
import { HumanTrust } from "@/components/home/HumanTrust";
import { ModernHero } from "@/components/home/ModernHero";
import { PlanningPillars } from "@/components/home/PlanningPillars";
import { getAllAiaFundDisplayData } from "@/lib/aia/server";
import { isLocale, type Locale } from "@/lib/i18n";
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

  return {
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    openGraph: {
      title: dictionary.meta.title,
      description: dictionary.meta.description,
      type: "website",
      locale: locale === "zh" ? "zh_CN" : "en_US",
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        "zh-Hans": "/zh",
      },
    },
  };
}

export default async function LocaleHomePage({ params }: PageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const dictionary = getDictionary(locale);
  const funds = await getAllAiaFundDisplayData();

  return (
    <>
      <ModernHero dictionary={dictionary} locale={locale} />
      <BrandStatement dictionary={dictionary} />
      <PlanningPillars dictionary={dictionary} />
      <ArkJourney dictionary={dictionary} />
      <HumanTrust dictionary={dictionary} locale={locale} />
      <FundUpdates dictionary={dictionary} funds={funds} locale={locale} />
      <EditorialInsights dictionary={dictionary} locale={locale} />
      <ClosingStatement dictionary={dictionary} locale={locale} />
    </>
  );
}
