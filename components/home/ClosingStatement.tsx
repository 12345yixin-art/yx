import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Dictionary } from "@/messages";
import type { Locale } from "@/lib/i18n";

export function ClosingStatement({ dictionary, locale }: { dictionary: Dictionary; locale: Locale }) {
  const closing = dictionary.home.closing;
  return (
    <section className="relative overflow-hidden bg-[var(--ark-navy)] py-20 text-white sm:py-28 lg:py-32">
      <div className="absolute left-[12%] top-16 h-px w-[76%] -rotate-6 bg-[var(--ark-gold-soft)] opacity-60" />
      <Container>
        <div className="relative max-w-5xl">
          <p className="ark-section-label ark-section-label-soft">
            {closing.eyebrow}
          </p>
          <h2 className="mt-6 font-serif text-[3.2rem] font-semibold leading-[1.02] sm:text-[5rem] lg:text-[6rem]">
            {closing.heading[0]}
            <span className="block">{closing.heading[1]}</span>
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            {closing.copy}
          </p>
          <Button
            href={`/${locale}/contact`}
            variant="inverted"
            className="group mt-10 gap-2"
          >
            {closing.cta}
            <ArrowRight aria-hidden="true" size={16} className="transition group-hover:translate-x-1" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
