import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaqPageContent } from "@/components/faq/FaqPageContent";
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
  const meta = dictionary.faqPage.meta;

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
    },
    alternates: {
      canonical: `/${locale}/faq`,
      languages: {
        en: "/en/faq",
        "zh-Hans": "/zh/faq",
      },
    },
  };
}

export default async function FAQPage({ params }: PageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const dictionary = getDictionary(locale);

  return <FaqPageContent dictionary={dictionary} locale={locale} />;
}
