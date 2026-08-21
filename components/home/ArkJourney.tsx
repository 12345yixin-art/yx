import { Container } from "@/components/ui/Container";
import type { Dictionary } from "@/messages";

export function ArkJourney({ dictionary }: { dictionary: Dictionary }) {
  const journey = dictionary.home.journey;
  return (
    <section className="overflow-hidden bg-[var(--ark-navy)] py-20 text-white sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <div>
            <p className="ark-section-label ark-section-label-soft">
              {journey.eyebrow}
            </p>
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              {journey.title}
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-3 top-0 h-full w-px bg-[var(--ark-gold-soft)] lg:left-0 lg:top-1/2 lg:h-px lg:w-full" />
            <div className="grid gap-7 lg:grid-cols-5 lg:gap-4">
              {journey.steps.map((step, index) => (
                <div key={step} className="relative pl-10 lg:pl-0 lg:pt-10">
                  <span className="absolute left-0 top-1.5 h-2.5 w-2.5 bg-[var(--ark-gold-soft)] lg:top-0" />
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-slate-300">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
