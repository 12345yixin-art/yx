import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { EditorialImage } from "@/components/ui/EditorialImage";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/messages";

export function ContactPageContent({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  const contact = dictionary.contactPage;

  return (
    <>
      <section className="relative overflow-hidden bg-[var(--ark-warm-white)] py-20 sm:py-28 lg:py-32">
        <div className="absolute right-[12%] top-24 h-28 w-px bg-[var(--ark-gold-soft)]" />
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
            <div>
              <p className="ark-section-label">{contact.hero.eyebrow}</p>
              <h1 className="mt-6 max-w-5xl text-balance font-serif text-[3.2rem] font-semibold leading-[1.02] text-[var(--ark-navy)] sm:text-[5rem] lg:text-[6rem]">
                {contact.hero.title}
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--ark-gray)]">
                {contact.hero.copy}
              </p>
            </div>
            <div className="max-w-md border border-[var(--ark-border)] bg-white p-3 lg:max-w-none">
              <EditorialImage
                image="contactHandshake"
                locale={locale}
                priority
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="aspect-[4/5] sm:aspect-[3/4]"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.42fr_0.58fr]">
            <div>
              <p className="ark-section-label">{contact.intro.eyebrow}</p>
              <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight text-[var(--ark-navy)] sm:text-5xl">
                {contact.intro.title}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-[var(--ark-gray)]">
                {contact.intro.copy}
              </p>

              <div className="mt-12 border-y border-[var(--ark-border)]">
                {contact.process.map(([label, copy]) => (
                  <div key={label} className="grid gap-3 border-b border-[var(--ark-border)] py-6 last:border-b-0">
                    <p className="ark-section-number-label">{label}</p>
                    <p className="max-w-md text-base leading-8 text-[var(--ark-gray)]">
                      {copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <ContactForm dictionary={dictionary} locale={locale} />
          </div>
        </Container>
      </section>

      <section className="bg-[var(--ark-navy)] py-16 text-white sm:py-20">
        <Container>
          <div className="grid gap-8 border-y border-white/15 py-10 lg:grid-cols-[0.35fr_0.65fr]">
            <p className="ark-section-label ark-section-label-soft">
              {contact.direct.eyebrow}
            </p>
            <div>
              <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">
                {contact.direct.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-200">
                {contact.direct.copy}
              </p>
              <dl className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="border-t border-white/15 pt-5">
                  <dt className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--ark-gold-soft)]">
                    {contact.direct.emailLabel}
                  </dt>
                  <dd className="mt-3">
                    <a
                      className="text-base font-semibold text-white underline decoration-[var(--ark-gold)] underline-offset-4 transition hover:text-[var(--ark-gold-soft)]"
                      href={`mailto:${contact.direct.email}`}
                    >
                      {contact.direct.email}
                    </a>
                  </dd>
                </div>
                <div className="border-t border-white/15 pt-5">
                  <dt className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--ark-gold-soft)]">
                    {contact.direct.whatsappLabel}
                  </dt>
                  <dd className="mt-3">
                    <a
                      className="text-base font-semibold text-white underline decoration-[var(--ark-gold)] underline-offset-4 transition hover:text-[var(--ark-gold-soft)]"
                      href={contact.direct.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contact.direct.whatsapp}
                    </a>
                  </dd>
                </div>
                <div className="border-t border-white/15 pt-5">
                  <dt className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--ark-gold-soft)]">
                    {contact.direct.phoneLabel}
                  </dt>
                  <dd className="mt-3">
                    <a
                      className="text-base font-semibold text-white underline decoration-[var(--ark-gold)] underline-offset-4 transition hover:text-[var(--ark-gold-soft)]"
                      href={contact.direct.phoneHref}
                    >
                      {contact.direct.phone}
                    </a>
                  </dd>
                </div>
                <div className="border-t border-white/15 pt-5">
                  <dt className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--ark-gold-soft)]">
                    {contact.direct.addressLabel}
                  </dt>
                  <dd className="mt-3 text-sm leading-7 text-slate-200">
                    <address className="not-italic">
                      {contact.direct.address.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
