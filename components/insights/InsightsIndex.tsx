"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { InsightArticle, InsightCategory } from "@/data/insights";
import type { Locale } from "@/lib/i18n";

type CategoryTab = {
  key: "all" | InsightCategory;
  label: string;
};

export function InsightsIndex({
  articles,
  categories,
  locale,
  readArticleLabel,
}: {
  articles: InsightArticle[];
  categories: CategoryTab[];
  locale: Locale;
  readArticleLabel: string;
}) {
  const [activeCategory, setActiveCategory] = useState<CategoryTab["key"]>("all");
  const filteredArticles = useMemo(
    () =>
      activeCategory === "all"
        ? articles
        : articles.filter((article) => article.categoryKey === activeCategory),
    [activeCategory, articles],
  );
  const [featured, ...rest] = filteredArticles;

  return (
    <div>
      <nav aria-label="Insight categories" className="flex flex-wrap gap-x-7 gap-y-4 border-b border-[var(--ark-border)]">
        {categories.map((category) => {
          const isActive = activeCategory === category.key;

          return (
            <button
              key={category.key}
              aria-pressed={isActive}
              className={`border-b-2 pb-4 text-left text-sm font-bold uppercase tracking-[0.1em] transition ${
                isActive
                  ? "border-[var(--ark-gold)] text-[var(--ark-navy)]"
                  : "border-transparent text-[var(--ark-gray)] hover:text-[var(--ark-navy)]"
              }`}
              type="button"
              onClick={() => setActiveCategory(category.key)}
            >
              {category.label}
            </button>
          );
        })}
      </nav>

      {featured ? (
        <div className="mt-12 grid gap-12 lg:grid-cols-[0.52fr_0.48fr] lg:items-end">
          <Link
            className="group block border-y border-[var(--ark-border)] py-10"
            href={`/${locale}/insights/${featured.slug}`}
          >
            <p className="ark-section-label">{featured.category}</p>
            <h2 className="mt-6 max-w-3xl font-serif text-4xl font-semibold leading-tight text-[var(--ark-navy)] sm:text-5xl">
              {featured.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--ark-gray)]">
              {featured.summary}
            </p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[var(--ark-navy)]">
              {readArticleLabel}
              <ArrowRight aria-hidden="true" className="text-[var(--ark-gold)] transition group-hover:translate-x-1" size={16} />
            </span>
          </Link>

          <div className="relative min-h-64 border border-[var(--ark-border)] bg-[var(--ark-warm-white)] p-8">
            <div className="absolute left-8 top-12 h-28 w-px bg-[var(--ark-gold-soft)]" />
            <p className="relative ml-auto max-w-sm border-l border-[var(--ark-gold)] pl-5 font-serif text-3xl font-semibold leading-tight text-[var(--ark-navy)]">
              {featured.pullQuote}
            </p>
          </div>
        </div>
      ) : null}

      {rest.length > 0 ? (
        <div className="mt-16 border-y border-[var(--ark-border)]">
          {rest.map((article, index) => (
            <Link
              key={article.slug}
              className="group grid gap-5 border-b border-[var(--ark-border)] py-8 last:border-b-0 lg:grid-cols-[auto_0.24fr_1fr_auto] lg:items-center"
              href={`/${locale}/insights/${article.slug}`}
            >
              <span className="font-serif text-4xl font-semibold text-[var(--ark-gold)]">
                0{index + 2}
              </span>
              <span className="ark-section-label text-[var(--ark-gray)]">
                {article.category}
              </span>
              <span>
                <span className="block font-serif text-3xl font-semibold leading-tight text-[var(--ark-navy)]">
                  {article.title}
                </span>
                <span className="mt-3 block max-w-3xl text-base leading-8 text-[var(--ark-gray)]">
                  {article.summary}
                </span>
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-[var(--ark-navy)]">
                {readArticleLabel}
                <ArrowRight aria-hidden="true" className="text-[var(--ark-gold)] transition group-hover:translate-x-1" size={16} />
              </span>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
