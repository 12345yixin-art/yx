import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPageContent } from "@/components/legal/LegalPageContent";
import { getLegalPage } from "@/data/legal-pages";
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

  const page = getLegalPage(locale, "disclaimer");

  return {
    title: {
      absolute: `${page.title} | ARK Legacy Partner`,
    },
    description: page.description,
    openGraph: {
      title: `${page.title} | ARK Legacy Partner`,
      description: page.description,
      type: "website",
      locale: locale === "zh" ? "zh_CN" : "en_US",
      images: sharedOpenGraphImages,
    },
    alternates: {
      canonical: `/${locale}/disclaimer`,
      languages: {
        en: "/en/disclaimer",
        "zh-Hans": "/zh/disclaimer",
      },
    },
  };
}

export default async function DisclaimerPage({ params }: PageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  return <LegalPageContent locale={localeParam as Locale} page="disclaimer" />;
}
