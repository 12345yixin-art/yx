import { Container } from "@/components/ui/Container";
import type { Dictionary } from "@/messages";

export function BrandStatement({ dictionary }: { dictionary: Dictionary }) {
  const brand = dictionary.home.brand;
  return (
    <section id="approach" className="bg-[var(--ark-warm-white)] py-20 sm:py-28 lg:py-36">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="ark-section-label">
              {brand.eyebrow}
            </p>
            <div className="mt-6 h-px w-24 bg-[var(--ark-gold)]" />
          </div>
          <div>
            <h2 className="font-serif text-[3rem] font-semibold leading-[1.02] text-[var(--ark-navy)] sm:text-[4.6rem] lg:text-[5.8rem]">
              {brand.heading[0]}
              <span className="block">{brand.heading[1]}</span>
              <span className="mt-5 block text-[var(--ark-gold)]">{brand.heading[2]}</span>
              <span className="block">{brand.heading[3]}</span>
            </h2>
            <p className="mt-10 max-w-3xl text-lg leading-8 text-[var(--ark-gray)]">
              {brand.supporting}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
