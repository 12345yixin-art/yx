import { ArrowDownRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Dictionary } from "@/messages";
import type { Locale } from "@/lib/i18n";

export function ModernHero({ dictionary, locale }: { dictionary: Dictionary; locale: Locale }) {
  const hero = dictionary.home.hero;
  return (
    <section className="relative isolate overflow-hidden bg-[var(--ark-navy)] text-white">
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="absolute left-[8%] top-[22%] h-px w-[78%] -rotate-6 bg-[var(--ark-gold)] opacity-70" />
      <div className="absolute right-[-14rem] top-[18%] h-[34rem] w-[34rem] rounded-full border border-white/10" />
      <div className="absolute right-[18%] top-[24%] h-52 w-px bg-[var(--ark-gold-soft)]/45" />
      <Container>
        <div className="relative grid min-h-[88vh] content-between gap-10 py-20 sm:py-24 lg:min-h-[92vh]">
          <div className="max-w-6xl pt-8 lg:pt-16">
            <p className="ark-section-label ark-section-label-soft">
              {hero.eyebrow}
            </p>
            <h1 className="mt-7 max-w-5xl text-balance font-serif text-[3.2rem] font-semibold leading-[0.98] sm:text-[5rem] lg:text-[6.35rem]">
              {hero.heading[0]}
              <span className="block">{hero.heading[1]}</span>
              <span className="block text-[var(--ark-gold-soft)]">{hero.heading[2]}</span>
            </h1>
            <div className="mt-9 grid max-w-5xl gap-6 lg:grid-cols-[0.72fr_1fr] lg:items-end">
              <p className="text-xl leading-8 text-white sm:text-2xl">
                {hero.supporting}
              </p>
              <p className="max-w-2xl text-base leading-8 text-slate-300">
                {hero.secondary}
              </p>
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={`/${locale}/contact`} variant="inverted">
                {hero.primary}
              </Button>
              <Button
                href="#approach"
                variant="darkSecondary"
                className="group gap-2"
              >
                {hero.secondaryCta}
                <ArrowRight aria-hidden="true" size={16} className="transition group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <nav aria-label="Homepage journey markers" className="grid gap-3 border-t border-white/15 pt-5 sm:grid-cols-4">
              {hero.markers.map((marker) => (
                <a
                  key={marker}
                  href="#pillars"
                  className="group flex items-center justify-between gap-4 border-b border-white/10 pb-3 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-slate-300 transition hover:text-white"
                >
                  {marker}
                  <span className="h-px w-8 bg-[var(--ark-gold-soft)] transition group-hover:w-12" />
                </a>
              ))}
            </nav>
            <div className="relative min-h-44 overflow-hidden border border-white/15 bg-white/[0.03] p-6">
              <div className="absolute left-7 top-8 h-28 w-[62%] rounded-t-full border-l border-t border-[var(--ark-gold-soft)]" />
              <div className="absolute left-20 top-4 h-36 w-[54%] rounded-t-full border-l border-t border-[var(--ark-gold)]" />
              <div className="absolute bottom-10 left-8 h-px w-[72%] -rotate-6 bg-[var(--ark-gold-soft)]" />
              <div className="relative ml-auto max-w-48 border-l border-[var(--ark-gold)] pl-4">
                <ArrowDownRight aria-hidden="true" className="mb-5 text-[var(--ark-gold-soft)]" size={22} />
                <p className="font-serif text-2xl font-semibold leading-tight">
                  {hero.visual}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
