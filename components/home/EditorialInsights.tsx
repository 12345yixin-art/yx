import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { getInsights } from "@/data/insights";
import type { Dictionary } from "@/messages";
import type { Locale } from "@/lib/i18n";

export function EditorialInsights({ dictionary, locale }: { dictionary: Dictionary; locale: Locale }) {
  const insights = dictionary.home.insights;
  const articles = getInsights(locale).slice(0, 3);

  return (
    <section className="bg-white py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr]">
          <div>
            <p className="ark-section-label">
              {insights.eyebrow}
            </p>
            <h2 className="mt-5 max-w-xl font-serif text-4xl font-semibold leading-tight text-[var(--ark-navy)] sm:text-5xl">
              {insights.title}
            </h2>
            <EditorialImage
              image="investmentMarket"
              locale={locale}
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="mt-8 aspect-[4/3] border border-[var(--ark-border)] sm:aspect-[16/10]"
            />
            <Button
              href={`/${locale}/insights`}
              variant="ghost"
              className="group mt-6 gap-2 px-0"
            >
              {insights.cta}
              <ArrowRight aria-hidden="true" size={16} className="text-[var(--ark-gold)] transition group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="border-y border-[var(--ark-border)]">
            {articles.map((article, index) => (
              <Link
                key={article.slug}
                href={`/${locale}/insights/${article.slug}`}
                className="group grid gap-4 border-b border-[var(--ark-border)] py-8 last:border-b-0 sm:grid-cols-[auto_1fr_auto] sm:items-center"
              >
                <span className="font-serif text-4xl font-semibold text-[var(--ark-gold)]">
                  0{index + 1}
                </span>
                <span>
                  <span className="block text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[var(--ark-gray)]">
                    {article.category}
                  </span>
                  <span className="mt-2 block font-serif text-2xl font-semibold leading-tight text-[var(--ark-navy)]">
                    {article.title}
                  </span>
                </span>
                <ArrowRight aria-hidden="true" className="text-[var(--ark-gold)] transition group-hover:translate-x-1" size={18} />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
