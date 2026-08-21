import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  articleUiCopy,
  estimateReadingTime,
  getRelatedInsights,
  type InsightArticle,
} from "@/data/insights";
import type { Locale } from "@/lib/i18n";

export function ArticlePageContent({
  article,
  locale,
}: {
  article: InsightArticle;
  locale: Locale;
}) {
  const copy = articleUiCopy[locale];
  const related = getRelatedInsights(locale, article.slug);
  const readingTime = estimateReadingTime(locale, article);

  return (
    <>
      <article>
        <section className="bg-[var(--ark-warm-white)] py-20 sm:py-28 lg:py-32">
          <Container>
            <div className="max-w-5xl">
              <p className="ark-section-label">{article.category}</p>
              <h1 className="mt-6 max-w-5xl text-balance font-serif text-[3rem] font-semibold leading-[1.04] text-[var(--ark-navy)] sm:text-[4.8rem]">
                {article.title}
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--ark-gray)]">
                {article.summary}
              </p>
              <p className="mt-6 text-sm font-semibold text-[var(--ark-gold)]">
                {locale === "zh" ? `约 ${readingTime} ${copy.minRead}` : `${readingTime} ${copy.minRead}`}
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-white py-16 sm:py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.26fr_minmax(0,0.74fr)]">
              <aside className="hidden lg:block">
                <div className="sticky top-28 border-l border-[var(--ark-gold)] pl-5">
                  <p className="ark-section-label">{copy.inThisArticle}</p>
                  <nav className="mt-5 grid gap-3" aria-label={copy.inThisArticle}>
                    {article.sections.map((section) => (
                      <a
                        key={section.heading}
                        className="text-sm leading-6 text-[var(--ark-gray)] transition hover:text-[var(--ark-navy)]"
                        href={`#${slugify(section.heading)}`}
                      >
                        {section.heading}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              <div className="max-w-[740px]">
                <blockquote className="border-y border-[var(--ark-border)] py-8">
                  <p className="font-serif text-3xl font-semibold leading-tight text-[var(--ark-navy)]">
                    {article.pullQuote}
                  </p>
                </blockquote>

                <div className="mt-12 grid gap-12">
                  {article.sections.map((section) => (
                    <section key={section.heading} id={slugify(section.heading)}>
                      <h2 className="font-serif text-3xl font-semibold leading-tight text-[var(--ark-navy)] sm:text-4xl">
                        {section.heading}
                      </h2>
                      <div className="mt-5 grid gap-5 text-base leading-8 text-[var(--ark-gray)] sm:text-lg">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>

                <section className="mt-14 border-y border-[var(--ark-border)] py-8">
                  <h2 className="font-serif text-2xl font-semibold text-[var(--ark-navy)]">
                    {copy.disclaimerTitle}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--ark-gray)]">
                    {copy.disclaimer}
                  </p>
                </section>
              </div>
            </div>
          </Container>
        </section>
      </article>

      <section className="bg-[var(--ark-navy)] py-20 text-white sm:py-28">
        <Container>
          <div className="max-w-5xl">
            <p className="ark-section-label ark-section-label-soft">
              {copy.closing.eyebrow}
            </p>
            <h2 className="mt-6 font-serif text-[3rem] font-semibold leading-tight sm:text-[5rem]">
              {copy.closing.title}
            </h2>
            <Button
              className="group mt-10 gap-2"
              href={`/${locale}/contact`}
              variant="inverted"
            >
              {copy.closing.cta}
              <ArrowRight aria-hidden="true" size={16} className="transition group-hover:translate-x-1" />
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <p className="ark-section-label">{copy.related}</p>
          <div className="mt-8 border-y border-[var(--ark-border)]">
            {related.map((relatedArticle) => (
              <Link
                key={relatedArticle.slug}
                className="group grid gap-3 border-b border-[var(--ark-border)] py-7 last:border-b-0 sm:grid-cols-[0.22fr_1fr_auto] sm:items-center"
                href={`/${locale}/insights/${relatedArticle.slug}`}
              >
                <span className="ark-section-label text-[var(--ark-gray)]">
                  {relatedArticle.category}
                </span>
                <span className="font-serif text-2xl font-semibold text-[var(--ark-navy)]">
                  {relatedArticle.title}
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-[var(--ark-navy)]">
                  {locale === "zh" ? "阅读文章" : "Read Article"}
                  <ArrowRight aria-hidden="true" className="text-[var(--ark-gold)] transition group-hover:translate-x-1" size={16} />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, "-")
    .replace(/^-|-$/g, "");
}
