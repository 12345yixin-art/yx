import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/messages";

export function ServicesPageContent({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  const services = dictionary.servicesPage;

  return (
    <>
      <section className="relative overflow-hidden bg-[var(--ark-navy)] py-20 text-white sm:py-28 lg:py-32">
        <div className="absolute left-[10%] top-20 h-px w-[78%] -rotate-6 bg-[var(--ark-gold-soft)] opacity-70" />
        <div className="absolute right-[12%] top-16 h-72 w-px bg-white/10" />
        <Container>
          <div className="relative max-w-6xl">
            <p className="ark-section-label ark-section-label-soft">
              {services.hero.eyebrow}
            </p>
            <h1 className="mt-6 text-balance font-serif text-[3.25rem] font-semibold leading-[1] sm:text-[5rem] lg:text-[6.1rem]">
              {services.hero.title}
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-200">
              {services.hero.copy}
            </p>
          </div>
        </Container>
      </section>

      <section className="sticky top-16 z-30 border-y border-[var(--ark-border)] bg-white/95 backdrop-blur">
        <Container>
          <nav aria-label="Services index" className="grid gap-0 sm:grid-cols-4">
            {services.index.map(([number, label, href]) => (
              <a
                key={href}
                href={`#${href}`}
                className="group flex items-center justify-between border-b border-[var(--ark-border)] py-4 text-sm font-bold uppercase tracking-[0.12em] text-[var(--ark-navy)] transition hover:text-[var(--ark-gold)] sm:border-b-0 sm:border-r sm:px-5 sm:last:border-r-0"
              >
                <span className="text-[var(--ark-gold)]">{number}</span>
                <span>{label}</span>
                <span className="h-px w-6 bg-[var(--ark-gold-soft)] transition group-hover:w-10" />
              </a>
            ))}
          </nav>
        </Container>
      </section>

      {services.sections.map((section, index) => {
        const isDark = section.id === "protect";
        return (
          <section
            key={section.id}
            id={section.id}
            className={`scroll-mt-32 py-20 sm:py-28 ${
              isDark ? "bg-[var(--ark-navy)] text-white" : index % 2 === 0 ? "bg-white" : "bg-[var(--ark-warm-white)]"
            }`}
          >
            <Container>
              <div className="grid gap-10 lg:grid-cols-[0.46fr_0.54fr] lg:items-center">
                <div>
                  <p className={`ark-section-number-label ${isDark ? "ark-section-label-soft" : ""}`}>
                    {section.label}
                  </p>
                  <h2 className={`mt-5 max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl ${isDark ? "text-white" : "text-[var(--ark-navy)]"}`}>
                    {section.title}
                  </h2>
                  <p className={`mt-6 max-w-2xl text-base leading-8 ${isDark ? "text-slate-200" : "text-[var(--ark-gray)]"}`}>
                    {section.copy}
                  </p>
                  {"disclosure" in section && section.disclosure ? (
                    // TODO: Final Chinese compliance wording review required before production launch.
                    <p className={`mt-6 max-w-3xl border-l pl-4 text-sm leading-7 ${isDark ? "border-[var(--ark-gold-soft)] text-slate-300" : "border-[var(--ark-gold)] text-[var(--ark-gray)]"}`}>
                      {section.disclosure}
                    </p>
                  ) : null}
                  {"note" in section && section.note ? (
                    <p className="mt-6 max-w-3xl border-l border-[var(--ark-gold)] pl-4 text-sm leading-7 text-[var(--ark-gray)]">
                      {section.note}
                    </p>
                  ) : null}
                </div>
                <div className={`relative overflow-hidden p-6 sm:p-8 ${isDark ? "border border-white/15 bg-white/[0.04]" : "bg-[var(--ark-warm-white)]"}`}>
                  {index === 0 ? (
                    <div className="absolute right-0 top-8 h-28 w-16 rounded-l-full border-y border-l border-[var(--ark-gold-soft)]" />
                  ) : null}
                  {index === 1 ? (
                    <div className="absolute right-8 top-8 h-28 w-px bg-[var(--ark-gold-soft)]" />
                  ) : null}
                  <div className={`absolute bottom-8 left-8 h-px ${index === 3 ? "w-24" : "w-[58%]"} ${isDark ? "bg-[var(--ark-gold-soft)]" : "bg-[var(--ark-gold-soft)]"}`} />
                  <ul className="relative grid gap-4">
                    {section.areas.map((area) => (
                      <li
                        key={area}
                        className={`flex items-center justify-between gap-5 border-b py-5 text-lg font-semibold ${
                          isDark ? "border-white/15 text-white" : "border-[var(--ark-border)] text-[var(--ark-navy)]"
                        }`}
                      >
                        {area}
                        <span className={`h-px w-8 ${isDark ? "bg-[var(--ark-gold-soft)]" : "bg-[var(--ark-gold)]"}`} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      <section className="overflow-hidden bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
            <div>
              <p className="ark-section-label">
                {services.connects.eyebrow}
              </p>
              <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight text-[var(--ark-navy)] sm:text-5xl">
                {services.connects.title[0]}
                <span className="block text-[var(--ark-gold)]">{services.connects.title[1]}</span>
              </h2>
            </div>
            <div className="relative min-h-64 border border-[var(--ark-border)] bg-[var(--ark-warm-white)] p-8">
              <div className="absolute left-8 top-1/2 h-px w-[78%] -rotate-6 bg-[var(--ark-gold)]" />
              <div className="relative grid gap-5 sm:grid-cols-4">
                {services.connects.steps.map((step, index) => (
                  <div key={step} className="border-t border-[var(--ark-gold-soft)] pt-5">
                    <p className="font-serif text-4xl font-semibold text-[var(--ark-gold)]">0{index + 1}</p>
                    <p className="mt-4 text-sm font-bold uppercase tracking-[0.12em] text-[var(--ark-navy)]">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--ark-navy)] py-20 text-white sm:py-28">
        <Container>
          <div className="max-w-5xl">
            <p className="ark-section-label ark-section-label-soft">
              {services.closing.eyebrow}
            </p>
            <h2 className="mt-6 font-serif text-[3rem] font-semibold leading-tight sm:text-[5rem]">
              {services.closing.title}
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200">
              {services.closing.copy}
            </p>
            <Button
              href={`/${locale}/contact`}
              variant="inverted"
              className="group mt-10 gap-2"
            >
              {services.closing.cta}
              <ArrowRight aria-hidden="true" size={16} className="transition group-hover:translate-x-1" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
