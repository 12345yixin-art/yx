import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactPageContent } from "@/components/contact/ContactPageContent";
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
  const meta = dictionary.contactPage.meta;

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
      canonical: `/${locale}/contact`,
      languages: {
        en: "/en/contact",
        "zh-Hans": "/zh/contact",
      },
    },
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const dictionary = getDictionary(locale);

  return <ContactPageContent dictionary={dictionary} locale={locale} />;
}
