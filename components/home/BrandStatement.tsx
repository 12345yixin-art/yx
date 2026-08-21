import { Container } from "@/components/ui/Container";
import { EditorialImage } from "@/components/ui/EditorialImage";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/messages";

export function BrandStatement({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  const brand = dictionary.home.brand;
  return (
    <section id="approach" className="bg-[var(--ark-warm-white)] py-20 sm:py-28 lg:py-36">
      <Container>
        <div className="grid gap-12 md:grid-cols-[0.42fr_0.58fr] lg:grid-cols-[0.32fr_0.68fr]">
          <div>
            <p className="ark-section-label">
              {brand.eyebrow}
            </p>
            <div className="mt-6 h-px w-24 bg-[var(--ark-gold)]" />
            <div className="mt-10 border border-[var(--ark-border)] bg-white p-3">
              <EditorialImage
                image="financialPlanning"
                locale={locale}
                sizes="(min-width: 1024px) 30vw, (min-width: 768px) 34vw, 100vw"
                className="aspect-[4/3] sm:aspect-[5/4] md:aspect-[4/3] lg:aspect-[5/4]"
              />
            </div>
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
