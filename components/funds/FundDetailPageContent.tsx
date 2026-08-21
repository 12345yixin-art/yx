import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FundNavChart } from "@/components/funds/FundNavChart";
import { formatFundDate } from "@/data/aia-funds";
import type { AiaFundDisplayData } from "@/lib/aia/server";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/messages";

export function FundDetailPageContent({
  dictionary,
  fundData,
  locale,
}: {
  dictionary: Dictionary;
  fundData: AiaFundDisplayData;
  locale: Locale;
}) {
  const copy = dictionary.funds.detail;
  const { fund, history, historyStatus, latest } = fundData;
  const navText = latest ? `${latest.currency} ${latest.nav}` : copy.navUnavailable;
  const valuationText = latest ? formatFundDate(latest.valuationDate, locale) : copy.navUnavailable;
  const dataChecked = latest ? formatDateTime(latest.fetchedAt, locale) : null;
  const historyUnavailableText =
    historyStatus === "unavailable"
      ? copy.historyTemporaryUnavailable
      : copy.historyUnavailable;
  const facts = [
    [copy.fundName, fund.officialName],
    [copy.fundCode, fund.code],
    [copy.currency, fund.currency],
    [copy.navLabel, navText],
    [copy.valuationDate, valuationText],
    [copy.source, fund.verifiedSource],
    ...(dataChecked ? [[copy.dataChecked, dataChecked]] : []),
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-[var(--ark-warm-white)] py-20 sm:py-28 lg:py-32">
        <div className="absolute right-[10%] top-20 h-40 w-px bg-[var(--ark-gold-soft)]" />
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
            <div>
              <p className="ark-section-label">{copy.eyebrow}</p>
              <h1 className="mt-6 max-w-5xl text-balance font-serif text-[3rem] font-semibold leading-[1.04] text-[var(--ark-navy)] sm:text-[4.8rem]">
                {fund.officialName}
              </h1>
              <p className="mt-8 max-w-3xl text-base leading-8 text-[var(--ark-gray)] sm:text-lg">
                {copy.heroCopy}
              </p>
            </div>
            <div className="border-y border-[var(--ark-border)] bg-white p-6 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--ark-gold)]">
                {copy.navLabel}
              </p>
              <p className="mt-3 font-serif text-[3.2rem] font-semibold leading-none text-[var(--ark-navy)] sm:text-[4rem]">
                {navText}
              </p>
              <dl className="mt-8 grid gap-5">
                {[
                  [copy.fundCode, fund.code],
                  [copy.valuationDate, valuationText],
                  [copy.source, fund.verifiedSource],
                  ...(dataChecked ? [[copy.dataChecked, dataChecked]] : []),
                ].map(([label, value]) => (
                  <div key={label} className="border-t border-[var(--ark-border)] pt-4">
                    <dt className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--ark-gray)]">
                      {label}
                    </dt>
                    <dd className="mt-2 text-lg font-semibold text-[var(--ark-navy)]">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.34fr_0.66fr]">
            <div>
              <p className="ark-section-label">{copy.informationEyebrow}</p>
              <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-[var(--ark-navy)] sm:text-5xl">
                {copy.informationTitle}
              </h2>
              <a
                className="mt-8 inline-flex items-center gap-2 border-b border-[var(--ark-gold)] pb-1 text-sm font-bold text-[var(--ark-navy)] transition hover:text-[var(--ark-gold)]"
                href={fund.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {copy.officialLink}
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </div>
            <dl className="grid gap-0 border-y border-[var(--ark-border)] sm:grid-cols-2">
              {facts.map(([label, value]) => (
                <div key={label} className="border-b border-[var(--ark-border)] py-6 sm:px-6 sm:odd:border-r">
                  <dt className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--ark-gold)]">
                    {label}
                  </dt>
                  <dd className="mt-3 break-words text-lg font-semibold leading-7 text-[var(--ark-navy)]">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--ark-warm-white)] py-20 sm:py-28">
        <Container>
          <div className="max-w-4xl">
            <p className="ark-section-label">{copy.historyEyebrow}</p>
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-[var(--ark-navy)] sm:text-5xl">
              {copy.historyTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--ark-gray)]">
              {copy.historyCopy}
            </p>
          </div>
          <div className="mt-10">
            <FundNavChart
              currency={fund.currency}
              data={history}
              locale={locale}
              officialLinkHref={fund.officialUrl}
              officialLinkLabel={copy.officialLink}
              unavailableText={historyUnavailableText}
            />
          </div>
        </Container>
      </section>

      <section className="bg-[var(--ark-navy)] py-16 text-white sm:py-20">
        <Container>
          <div className="max-w-4xl border-y border-white/15 py-8">
            <p className="ark-section-label ark-section-label-soft">{copy.disclosureTitle}</p>
            {/* TODO: Final wording requires AIA/compliance review before production. */}
            <p className="mt-5 text-sm leading-7 text-slate-200">
              {copy.disclosure}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

function formatDateTime(value: string, locale: Locale) {
  const formatted = new Intl.DateTimeFormat(locale === "zh" ? "zh-CN" : "en-GB", {
    day: "numeric",
    hour: "2-digit",
    hour12: false,
    minute: "2-digit",
    month: locale === "zh" ? "long" : "short",
    timeZone: "Asia/Kuala_Lumpur",
    year: "numeric",
  }).format(new Date(value));

  return `${formatted} MYT`;
}
