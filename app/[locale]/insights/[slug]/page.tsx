import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePageContent } from "@/components/insights/ArticlePageContent";
import { getAllInsightPaths, getInsight } from "@/data/insights";
import { isLocale, type Locale } from "@/lib/i18n";
import { sharedOpenGraphImages } from "@/lib/seo";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return getAllInsightPaths();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const article = getInsight(locale, slug);

  if (!article) {
    notFound();
  }

  return {
    title: {
      absolute: `${article.title} | ARK Legacy Partner`,
    },
    description: article.seoDescription,
    openGraph: {
      title: article.title,
      description: article.seoDescription,
      type: "article",
      locale: locale === "zh" ? "zh_CN" : "en_US",
      images: sharedOpenGraphImages,
    },
    alternates: {
      canonical: `/${locale}/insights/${slug}`,
      languages: {
        en: `/en/insights/${slug}`,
        "zh-Hans": `/zh/insights/${slug}`,
      },
    },
  };
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { locale: localeParam, slug } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const article = getInsight(locale, slug);

  if (!article) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.seoDescription,
    inLanguage: locale === "zh" ? "zh-Hans" : "en",
    mainEntityOfPage: `/${locale}/insights/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticlePageContent article={article} locale={locale} />
    </>
  );
}
