import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MalaysiaClock } from "@/components/funds/MalaysiaClock";
import { formatFundDate } from "@/data/aia-funds";
import type { AiaFundDisplayData } from "@/lib/aia/server";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/messages";

export function FundOverviewPageContent({
  dictionary,
  funds,
  locale,
}: {
  dictionary: Dictionary;
  funds: AiaFundDisplayData[];
  locale: Locale;
}) {
  const copy = dictionary.funds.overview;
  const homeCopy = dictionary.funds.home;

  return (
    <>
      <section className="relative overflow-hidden bg-[var(--ark-warm-white)] py-20 sm:py-28 lg:py-32">
        <div className="absolute right-[12%] top-20 h-40 w-px bg-[var(--ark-gold-soft)]" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full border border-[var(--ark-gold-soft)]/40" />
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
            <div>
              <p className="ark-section-label">{copy.eyebrow}</p>
              <h1 className="mt-6 max-w-5xl text-balance font-serif text-[3.15rem] font-semibold leading-[1.02] text-[var(--ark-navy)] sm:text-[5rem] lg:text-[6rem]">
                {copy.title[0]}
                <span className="block text-[var(--ark-gold)]">{copy.title[1]}</span>
              </h1>
              <p className="mt-8 max-w-3xl text-base leading-8 text-[var(--ark-gray)] sm:text-lg">
                {copy.copy}
              </p>
            </div>
            <div className="border-y border-[var(--ark-border)] bg-white p-6">
              <MalaysiaClock label={homeCopy.clockLabel} />
              <p className="mt-6 text-sm leading-7 text-[var(--ark-gray)]">
                {copy.source}: AIA Malaysia
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr]">
            <div>
              <p className="ark-section-label">{copy.listEyebrow}</p>
              <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-[var(--ark-navy)] sm:text-5xl">
                {copy.listTitle}
              </h2>
            </div>
            <div className="border-y border-[var(--ark-border)]">
              {funds.map(({ fund, latest }) => (
                <article key={fund.code} className="grid gap-7 border-b border-[var(--ark-border)] py-8 last:border-b-0 lg:grid-cols-[1fr_auto]">
                  <div className="min-w-0">
                    <Link
                      href={`/${locale}/funds/${fund.slug}`}
                      className="group inline-flex items-start gap-2 font-serif text-2xl font-semibold leading-tight text-[var(--ark-navy)] sm:text-3xl"
                    >
                      <span>{fund.officialName}</span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="mt-1 shrink-0 text-[var(--ark-gold)] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        size={18}
                      />
                    </Link>
                    <dl className="mt-6 grid gap-4 sm:grid-cols-3">
                      <div>
                        <dt className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--ark-gold)]">
                          {copy.fundCode}
                        </dt>
                        <dd className="mt-2 font-semibold text-[var(--ark-navy)]">{fund.code}</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--ark-gold)]">
                          {copy.navLabel}
                        </dt>
                        <dd className="mt-2 font-semibold text-[var(--ark-navy)]">
                          {latest ? `${latest.currency} ${latest.nav}` : copy.navUnavailable}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--ark-gold)]">
                          {copy.asAt}
                        </dt>
                        <dd className="mt-2 font-semibold text-[var(--ark-navy)]">
                          {latest ? formatFundDate(latest.valuationDate, locale) : copy.navUnavailable}
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div className="flex flex-col items-start gap-3 lg:items-end">
                    <Button href={`/${locale}/funds/${fund.slug}`} variant="secondary" className="group gap-2">
                      {copy.viewDetails}
                      <ArrowRight aria-hidden="true" size={16} className="text-[var(--ark-gold)] transition group-hover:translate-x-1" />
                    </Button>
                    <a
                      className="inline-flex items-center gap-2 border-b border-[var(--ark-gold)] pb-1 text-sm font-bold text-[var(--ark-navy)] transition hover:text-[var(--ark-gold)]"
                      href={fund.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {copy.officialLink}
                      <ArrowUpRight aria-hidden="true" size={15} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--ark-navy)] py-16 text-white sm:py-20">
        <Container>
          <div className="max-w-4xl border-y border-white/15 py-8">
            <p className="ark-section-label ark-section-label-soft">{copy.disclosureTitle}</p>
            {/* TODO: Final wording requires AIA/compliance review before production. */}
            <p className="mt-5 text-sm leading-7 text-slate-200">{copy.disclosure}</p>
          </div>
        </Container>
      </section>
    </>
  );
}
