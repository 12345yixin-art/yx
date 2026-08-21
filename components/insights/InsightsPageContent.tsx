import { Container } from "@/components/ui/Container";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { getInsightCategories, getInsights, insightHubCopy } from "@/data/insights";
import { InsightsIndex } from "@/components/insights/InsightsIndex";
import type { Locale } from "@/lib/i18n";

export function InsightsPageContent({ locale }: { locale: Locale }) {
  const copy = insightHubCopy[locale];
  const articles = getInsights(locale);
  const categories = getInsightCategories(locale);

  return (
    <>
      <section className="relative overflow-hidden bg-[var(--ark-warm-white)] py-20 sm:py-28 lg:py-32">
        <div className="absolute right-[12%] top-24 h-32 w-px bg-[var(--ark-gold-soft)]" />
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
            <div>
              <p className="ark-section-label">{copy.hero.eyebrow}</p>
              <h1 className="mt-6 max-w-5xl text-balance font-serif text-[3.2rem] font-semibold leading-[1.02] text-[var(--ark-navy)] sm:text-[5rem] lg:text-[6rem]">
                {copy.hero.title}
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--ark-gray)]">
                {copy.hero.copy}
              </p>
            </div>
            <EditorialImage
              image="investmentMarket"
              locale={locale}
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/3] border border-[var(--ark-border)] sm:aspect-[16/10] lg:aspect-[4/5]"
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <InsightsIndex
            articles={articles}
            categories={categories}
            locale={locale}
            readArticleLabel={copy.readArticle}
          />
        </Container>
      </section>
    </>
  );
}
