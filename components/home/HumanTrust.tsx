import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Dictionary } from "@/messages";
import type { Locale } from "@/lib/i18n";

export function HumanTrust({ dictionary, locale }: { dictionary: Dictionary; locale: Locale }) {
  const human = dictionary.home.human;
  return (
    <section className="bg-[var(--ark-warm-white)] py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.44fr_0.56fr] lg:items-center">
          <div className="relative min-h-[340px] overflow-hidden bg-white p-8 shadow-[var(--ark-shadow)] sm:min-h-[420px]">
            {/* TODO: Approved ARK advisor/team photography may be added in future. */}
            <div className="absolute inset-8 border border-[var(--ark-border)]" />
            <div className="absolute left-12 top-12 h-[72%] w-px bg-[var(--ark-gold-soft)]" />
            <div className="absolute left-12 top-12 h-px w-[62%] bg-[var(--ark-gold-soft)]" />
            <div className="absolute bottom-16 left-12 h-px w-[74%] -rotate-6 bg-[var(--ark-gold)]" />
            <div className="absolute right-8 top-8 h-24 w-24 border-r border-t border-[var(--ark-gold-soft)]" />
            <div className="absolute bottom-8 right-8 h-28 w-28 border-b border-r border-[var(--ark-border)]" />
            <div className="absolute left-20 top-24 h-48 w-40 rounded-t-full border-l border-t border-[var(--ark-gold-soft)]" />
            <div className="absolute left-32 top-16 h-64 w-48 rounded-t-full border-l border-t border-[var(--ark-gold)]" />
            <div className="absolute bottom-12 left-12 right-12 border-t border-[var(--ark-border)]" />
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
