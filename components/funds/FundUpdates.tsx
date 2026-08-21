import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { formatFundDate } from "@/data/aia-funds";
import type { AiaFundDisplayData } from "@/lib/aia/server";
import type { Dictionary } from "@/messages";
import type { Locale } from "@/lib/i18n";
import { MalaysiaClock } from "@/components/funds/MalaysiaClock";

export function FundUpdates({
  dictionary,
  funds,
  locale,
}: {
  dictionary: Dictionary;
  funds: AiaFundDisplayData[];
  locale: Locale;
}) {
  const copy = dictionary.funds.home;

  return (
    <section className="bg-[var(--ark-warm-white)] py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            <p className="ark-section-label">{copy.eyebrow}</p>
            <h2 className="mt-5 max-w-xl font-serif text-4xl font-semibold leading-tight text-[var(--ark-navy)] sm:text-5xl">
              {copy.title}
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-[var(--ark-gray)]">
              {copy.copy}
            </p>
            <div className="mt-8">
              <MalaysiaClock label={copy.clockLabel} />
            </div>
            <Button href={`/${locale}/funds`} variant="ghost" className="group mt-7 gap-2 px-0">
              {copy.allFunds}
              <ArrowRight aria-hidden="true" size={16} className="text-[var(--ark-gold)] transition group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="grid gap-5">
            {funds.map(({ fund, latest }) => (
              <article key={fund.code} className="border-y border-[var(--ark-border)] bg-white px-5 py-6 sm:px-7">
                <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
                  <div className="min-w-0">
                    <Link
                      className="group inline-flex items-start gap-2 font-serif text-2xl font-semibold leading-tight text-[var(--ark-navy)] sm:text-3xl"
                      href={`/${locale}/funds/${fund.slug}`}
                    >
                      <span>{fund.officialName}</span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="mt-1 shrink-0 text-[var(--ark-gold)] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        size={18}
                      />
                    </Link>
                    <p className="mt-4 text-sm font-bold uppercase tracking-[0.12em] text-[var(--ark-gold)]">
                      {copy.navLabel}
                    </p>
                    <p className="mt-2 text-sm text-[var(--ark-gray)]">
                      {latest ? `${copy.asAt} ${formatFundDate(latest.valuationDate, locale)}` : copy.navUnavailable}
                    </p>
                  </div>
                  <div className="lg:text-right">
                    <p className="font-serif text-[2.6rem] font-semibold leading-none text-[var(--ark-navy)] sm:text-[3.4rem]">
                      {latest ? `${latest.currency} ${latest.nav}` : copy.navUnavailable}
                    </p>
                    <div className="mt-5 flex flex-col gap-2 sm:flex-row lg:justify-end">
                      <Button href={`/${locale}/funds/${fund.slug}`} variant="secondary" className="text-xs">
                        {copy.viewDetails}
                      </Button>
                      <a
                        className="inline-flex min-h-11 items-center justify-center border border-[var(--ark-border)] px-5 py-3 text-xs font-semibold text-[var(--ark-navy)] transition hover:border-[var(--ark-gold-soft)] hover:bg-[var(--ark-warm-white)]"
                        href={fund.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {copy.officialLink}
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
