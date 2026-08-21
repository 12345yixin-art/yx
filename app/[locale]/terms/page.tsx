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

  const page = getLegalPage(locale, "terms");

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
      canonical: `/${locale}/terms`,
      languages: {
        en: "/en/terms",
        "zh-Hans": "/zh/terms",
      },
    },
  };
}

export default async function TermsPage({ params }: PageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  return <LegalPageContent locale={localeParam as Locale} page="terms" />;
}
