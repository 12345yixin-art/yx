import { ArrowRight } from "lucide-react";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { EditorialImage } from "@/components/ui/EditorialImage";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/messages";

export function FaqPageContent({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  const faq = dictionary.faqPage;

  return (
    <>
      <section className="relative overflow-hidden bg-[var(--ark-warm-white)] py-20 sm:py-28 lg:py-32">
        <div className="absolute left-[8%] top-24 h-px w-[42%] -rotate-6 bg-[var(--ark-gold-soft)]" />
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
            <div>
              <p className="ark-section-label">{faq.hero.eyebrow}</p>
              <h1 className="mt-6 max-w-5xl text-balance font-serif text-[3.2rem] font-semibold leading-[1.02] text-[var(--ark-navy)] sm:text-[5rem] lg:text-[6rem]">
                {faq.hero.title}
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--ark-gray)]">
                {faq.hero.copy}
              </p>
            </div>
            <div className="max-w-md border border-[var(--ark-border)] bg-white p-3 lg:max-w-none">
              <EditorialImage
                image="faqDiscussion"
                locale={locale}
                priority
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="aspect-[4/5] sm:aspect-[3/4]"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-16">
            {faq.groups.map((group, groupIndex) => (
              <section
                key={group.title}
                aria-labelledby={`faq-group-${groupIndex}`}
                className="grid gap-8 border-t border-[var(--ark-border)] pt-8 lg:grid-cols-[0.32fr_0.68fr]"
              >
                <div>
                  <p className="ark-section-number-label">0{groupIndex + 1}</p>
                  <h2
                    className="mt-4 font-serif text-3xl font-semibold leading-tight text-[var(--ark-navy)] sm:text-4xl"
                    id={`faq-group-${groupIndex}`}
                  >
                    {group.title}
                  </h2>
                </div>
                <div className="border-t border-[var(--ark-border)] lg:border-t-0">
                  {group.items.map(([question, answer]) => (
                    <FaqAccordion key={question} answer={answer} question={question} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--ark-navy)] py-20 text-white sm:py-28">
        <Container>
          <div className="max-w-5xl">
            <p className="ark-section-label ark-section-label-soft">
              {faq.closing.eyebrow}
            </p>
            <h2 className="mt-6 font-serif text-[3rem] font-semibold leading-tight sm:text-[5rem]">
              {faq.closing.title}
            </h2>
            <Button
              className="group mt-10 gap-2"
              href={`/${locale}/contact`}
              variant="inverted"
            >
              {faq.closing.cta}
              <ArrowRight aria-hidden="true" size={16} className="transition group-hover:translate-x-1" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
