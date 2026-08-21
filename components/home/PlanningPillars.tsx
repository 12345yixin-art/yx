import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { Dictionary } from "@/messages";

export function PlanningPillars({ dictionary }: { dictionary: Dictionary }) {
  const intro = dictionary.home.pillarsIntro;
  const pillars = dictionary.home.pillars;
  return (
    <section id="pillars" className="bg-white py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="mb-16 grid gap-7 lg:grid-cols-[0.5fr_0.5fr] lg:items-end">
          <div>
            <p className="ark-section-label">
              {intro.eyebrow}
            </p>
            <h2 className="mt-5 max-w-4xl font-serif text-4xl font-semibold leading-tight text-[var(--ark-navy)] sm:text-5xl">
              {intro.title}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[var(--ark-gray)] lg:justify-self-end">
            {intro.copy}
          </p>
        </div>
        <div className="grid gap-16">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.id}
              className={`grid gap-8 border-t border-[var(--ark-border)] pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center ${
                index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div>
                <p className="ark-section-number-label">
                  {pillar.id}
                </p>
                <h3 className="mt-5 max-w-2xl font-serif text-4xl font-semibold leading-tight text-[var(--ark-navy)] sm:text-5xl">
                  {pillar.title}
                </h3>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--ark-gray)]">
                  {pillar.copy}
                </p>
                {"disclosure" in pillar && pillar.disclosure ? (
                  <p className="mt-5 max-w-2xl border-l border-[var(--ark-gold)] pl-4 text-sm leading-7 text-[var(--ark-gray)]">
                    {pillar.disclosure}
                  </p>
                ) : null}
              </div>
              <div className="relative overflow-hidden bg-[var(--ark-warm-white)] p-6 sm:p-8">
                {index === 0 ? (
                  <div className="absolute right-0 top-8 h-24 w-16 rounded-l-full border-y border-l border-[var(--ark-gold-soft)]" />
                ) : null}
                {index === 1 ? (
                  <div className="absolute right-8 top-8 h-28 w-px bg-[var(--ark-gold-soft)]" />
                ) : null}
                <div className={`absolute bottom-8 left-8 h-px bg-[var(--ark-gold-soft)] ${
                  index === 3 ? "w-24" : "w-[58%]"
                }`} />
                <ul className="relative grid gap-4">
                  {pillar.items.map((item) => (
                    <li
                      key={item}
                      className="group flex items-center justify-between gap-5 border-b border-[var(--ark-border)] py-5 text-lg font-semibold text-[var(--ark-navy)]"
                    >
                      {item}
                      <ArrowUpRight aria-hidden="true" size={17} className="text-[var(--ark-gold)] transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
