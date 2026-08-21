import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { EditorialImage } from "@/components/ui/EditorialImage";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/messages";

export function AboutPageContent({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  const about = dictionary.aboutPage;

  return (
    <>
      <section className="relative overflow-hidden bg-[var(--ark-warm-white)] py-20 sm:py-28 lg:py-32">
        <div className="absolute right-0 top-20 h-72 w-28 rounded-l-full border-y border-l border-[var(--ark-gold-soft)]/70" />
        <div className="absolute right-[18%] top-28 h-px w-[38%] -rotate-6 bg-[var(--ark-gold)]" />
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_0.3fr] lg:items-end">
            <div>
              <p className="ark-section-label">
                {about.hero.eyebrow}
              </p>
              <h1 className="mt-6 max-w-5xl text-balance font-serif text-[3.2rem] font-semibold leading-[1.02] text-[var(--ark-navy)] sm:text-[5rem] lg:text-[6rem]">
                {about.hero.title[0]}
                <span className="block text-[var(--ark-gold)]">{about.hero.title[1]}</span>
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--ark-gray)]">
                {about.hero.copy}
              </p>
              <div className="mt-9">
                <Button href={`/${locale}/contact`}>{dictionary.home.hero.primary}</Button>
              </div>
            </div>
            <div className="border-l border-[var(--ark-gold)] pl-6">
              <p className="font-serif text-3xl font-semibold leading-tight text-[var(--ark-navy)]">
                Direction · Protection · Progress · Legacy
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr]">
            <div>
              <p className="ark-section-label">
                {about.belief.eyebrow}
              </p>
              <div className="mt-6 h-px w-24 bg-[var(--ark-gold)]" />
            </div>
            <div>
              <h2 className="font-serif text-[2.55rem] font-semibold leading-[1.04] text-[var(--ark-navy)] sm:text-[4.7rem]">
                {about.belief.title[0]}
                <span className="block">{about.belief.title[1]}</span>
              </h2>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--ark-gray)]">
                {about.belief.copy}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--ark-warm-white)] py-20 sm:py-28">
        <Container>
          <div className="grid gap-8">
            {about.approach.map((item) => (
              <article key={item.label} className="grid gap-6 border-t border-[var(--ark-border)] pt-8 lg:grid-cols-[0.34fr_0.66fr]">
                <p className="ark-section-number-label">
                  {item.label}
                </p>
                <div>
                  <h2 className="font-serif text-3xl font-semibold text-[var(--ark-navy)] sm:text-4xl">
                    {item.title}
                  </h2>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--ark-gray)]">
                    {item.copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr]">
            <h2 className="font-serif text-4xl font-semibold leading-tight text-[var(--ark-navy)] sm:text-5xl">
              {about.audience.title}
            </h2>
            <div className="border-y border-[var(--ark-border)]">
              {about.audience.items.map(([number, title, copy]) => (
                <div key={number} className="grid gap-4 border-b border-[var(--ark-border)] py-7 last:border-b-0 sm:grid-cols-[auto_1fr]">
                  <span className="font-serif text-3xl font-semibold text-[var(--ark-gold)]">{number}</span>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-[var(--ark-navy)]">{title}</h3>
                    <p className="mt-2 text-base leading-7 text-[var(--ark-gray)]">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--ark-navy)] py-20 text-white sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.52fr_0.48fr] lg:items-center">
            <div>
              <p className="ark-section-label ark-section-label-soft">
                {about.personal.eyebrow}
              </p>
              <h2 className="mt-6 font-serif text-[3rem] font-semibold leading-[1.04] sm:text-[4.8rem]">
                {about.personal.title[0]}
                <span className="block text-[var(--ark-gold-soft)]">{about.personal.title[1]}</span>
              </h2>
              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-200">
                {about.personal.copy}
              </p>
            </div>
            <div className="relative overflow-hidden border border-white/15 bg-white/[0.04] p-4 sm:p-5">
              <EditorialImage
                image="consultation"
                locale={locale}
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="min-h-80 sm:min-h-[28rem]"
              />
              <div className="absolute inset-4 bg-[var(--ark-navy)]/5 sm:inset-5" />
              <div className="absolute bottom-12 left-8 h-px w-[62%] bg-[var(--ark-gold-soft)]" />
              <div className="relative ml-auto mt-6 max-w-xs border-l border-[var(--ark-gold)] pl-5">
                <h3 className="font-serif text-3xl font-semibold">{about.advisor.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{about.advisor.copy}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 border-y border-[var(--ark-border)] py-10 lg:grid-cols-[0.32fr_0.68fr]">
            <h2 className="font-serif text-3xl font-semibold text-[var(--ark-navy)]">
              {about.aia.title}
            </h2>
            <div className="max-w-4xl text-base leading-8 text-[var(--ark-gray)]">
              {/* TODO: Final compliance review required before production launch. */}
              <p>{about.aia.copy}</p>
              <p className="mt-4">{about.aia.terms}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--ark-warm-white)] py-20 sm:py-28">
        <Container>
          <div className="max-w-5xl">
            <p className="ark-section-label">
              {about.closing.eyebrow}
            </p>
            <h2 className="mt-6 font-serif text-[3rem] font-semibold leading-tight text-[var(--ark-navy)] sm:text-[5rem]">
              {about.closing.title}
            </h2>
            <Button
              href={`/${locale}/contact`}
              variant="primary"
              className="group mt-10 gap-2"
            >
              {about.closing.cta}
              <ArrowRight aria-hidden="true" size={16} className="transition group-hover:translate-x-1" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
