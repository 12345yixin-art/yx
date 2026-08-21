import { Container } from "@/components/ui/Container";
import { getLegalPage, type LegalPageKey } from "@/data/legal-pages";
import type { Locale } from "@/lib/i18n";

export function LegalPageContent({
  locale,
  page,
}: {
  locale: Locale;
  page: LegalPageKey;
}) {
  const content = getLegalPage(locale, page);

  return (
    <article className="bg-white">
      <section className="bg-[var(--ark-warm-white)] py-20 sm:py-28">
        <Container>
          <div className="max-w-4xl">
            <p className="ark-section-label">{content.eyebrow}</p>
            <h1 className="mt-6 font-serif text-5xl font-semibold leading-tight text-[var(--ark-navy)] sm:text-6xl">
              {content.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--ark-gray)] sm:text-lg">
              {content.description}
            </p>
            <div className="mt-8 border-l border-[var(--ark-gold)] pl-5">
              <p className="text-sm font-semibold text-[var(--ark-navy)]">
                {content.lastUpdated}
              </p>
              <p className="mt-2 text-sm leading-7 text-[var(--ark-gray)]">
                {content.approvalNote}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-4xl divide-y divide-[var(--ark-border)] border-y border-[var(--ark-border)]">
            {content.sections.map((section) => (
              <section key={section.heading} className="py-8 sm:py-10">
                <h2 className="font-serif text-2xl font-semibold leading-tight text-[var(--ark-navy)] sm:text-3xl">
                  {section.heading}
                </h2>
                {section.paragraphs ? (
                  <div className="mt-5 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-8 text-[var(--ark-gray)]">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ) : null}
                {section.items ? (
                  <ul className="mt-5 space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3 text-base leading-8 text-[var(--ark-gray)]">
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ark-gold)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </Container>
      </section>
    </article>
  );
}
