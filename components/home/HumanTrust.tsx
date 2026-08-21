import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { EditorialImage } from "@/components/ui/EditorialImage";
import type { Dictionary } from "@/messages";
import type { Locale } from "@/lib/i18n";

export function HumanTrust({ dictionary, locale }: { dictionary: Dictionary; locale: Locale }) {
  const human = dictionary.home.human;
  return (
    <section className="bg-[var(--ark-warm-white)] py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.44fr_0.56fr] lg:items-center">
          <div className="relative overflow-hidden bg-white p-3 shadow-[var(--ark-shadow)]">
            <EditorialImage
              image="consultation"
              locale={locale}
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="min-h-[340px] sm:min-h-[420px]"
            />
            <div className="absolute inset-3 border border-white/45" />
            <div className="absolute bottom-10 left-8 h-px w-[62%] bg-[var(--ark-gold)]" />
          </div>
          <div>
            <p className="ark-section-label">
              {human.eyebrow}
            </p>
            <h2 className="mt-5 font-serif text-[3rem] font-semibold leading-[1.03] text-[var(--ark-navy)] sm:text-[4.7rem]">
              {human.heading[0]}
              <span className="block">{human.heading[1]}</span>
              <span className="mt-4 block text-[var(--ark-gold)]">{human.heading[2]}</span>
              <span className="block">{human.heading[3]}</span>
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--ark-gray)]">
              {human.copy}
            </p>
            <div className="mt-9">
              <Button href={`/${locale}/about`} variant="secondary">
                {human.cta}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
