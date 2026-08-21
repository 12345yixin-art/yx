"use client";

import { useMemo, useState } from "react";
import type { FundNavPoint } from "@/data/aia-fund-history";
import type { Locale } from "@/lib/i18n";

const ranges = ["1M", "3M", "6M", "1Y", "5Y", "ALL"] as const;
type Range = (typeof ranges)[number];

type FundNavChartProps = {
  currency: string;
  data: FundNavPoint[];
  locale: Locale;
  officialLinkHref?: string;
  officialLinkLabel?: string;
  unavailableText: string;
};

export function FundNavChart({
  currency,
  data,
  locale,
  officialLinkHref,
  officialLinkLabel,
  unavailableText,
}: FundNavChartProps) {
  const [range, setRange] = useState<Range>("1M");
  const [activePoint, setActivePoint] = useState<FundNavPoint | null>(null);
  const visibleData = useMemo(() => filterByRange(data, range), [data, range]);

  if (data.length === 0) {
    return (
      <div className="border-y border-[var(--ark-border)] py-8">
        <RangeSelector range={range} setRange={setRange} />
        <div className="mt-6 min-h-56 border border-dashed border-[var(--ark-border)] bg-white px-6 py-10">
          <p className="max-w-lg text-base leading-8 text-[var(--ark-gray)]">
            {unavailableText}
          </p>
          {officialLinkHref && officialLinkLabel ? (
            <a
              className="mt-6 inline-flex border-b border-[var(--ark-gold)] pb-1 text-sm font-bold text-[var(--ark-navy)] transition hover:text-[var(--ark-gold)]"
              href={officialLinkHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {officialLinkLabel}
            </a>
          ) : null}
        </div>
      </div>
    );
  }

  const points = buildChartPoints(visibleData);
  const linePath = points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");

  return (
    <div className="border-y border-[var(--ark-border)] py-8">
      <RangeSelector range={range} setRange={setRange} />
      <div className="mt-6 overflow-hidden bg-white p-4 sm:p-6">
        <div className="sr-only" aria-live="polite">
          {activePoint
            ? `${formatDate(activePoint.date, locale)} ${currency} ${activePoint.nav}`
            : ""}
        </div>
        <svg
          className="h-72 w-full"
          role="img"
          aria-label={`Historical NAV chart for ${currency}`}
          viewBox="0 0 720 280"
          preserveAspectRatio="none"
        >
          {[60, 120, 180, 240].map((y) => (
            <line key={y} x1="0" x2="720" y1={y} y2={y} stroke="var(--ark-mist)" strokeWidth="1" />
          ))}
          <path d={linePath} fill="none" stroke="var(--ark-gold)" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
          {points.map((point) => (
            <circle
              key={`${point.date}-${point.nav}`}
              cx={point.x}
              cy={point.y}
              r="8"
              fill="transparent"
              onMouseEnter={() => setActivePoint(point)}
              onFocus={() => setActivePoint(point)}
              tabIndex={0}
            />
          ))}
        </svg>
        <div className="mt-4 min-h-6 text-sm font-semibold text-[var(--ark-navy)]">
          {activePoint
            ? `${formatDate(activePoint.date, locale)} · ${currency} ${activePoint.nav.toFixed(5)}`
            : `${visibleData.length} NAV points`}
        </div>
      </div>
    </div>
  );
}

function RangeSelector({
  range,
  setRange,
}: {
  range: Range;
  setRange: (range: Range) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2" aria-label="Historical NAV range">
      {ranges.map((item) => (
        <button
          key={item}
          type="button"
          className={`min-h-10 border px-4 text-sm font-bold transition ${
            range === item
              ? "border-[var(--ark-navy)] bg-[var(--ark-navy)] text-white"
              : "border-[var(--ark-border)] bg-white text-[var(--ark-navy)] hover:border-[var(--ark-gold-soft)]"
          }`}
          onClick={() => setRange(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

function filterByRange(data: FundNavPoint[], range: Range) {
  if (range === "ALL" || data.length === 0) {
    return data;
  }

  const months = { "1M": 1, "3M": 3, "6M": 6, "1Y": 12, "5Y": 60 }[range];
  const latest = new Date(`${data[data.length - 1].date}T00:00:00+08:00`);
  const cutoff = new Date(latest);
  cutoff.setMonth(cutoff.getMonth() - months);

  return data.filter((point) => new Date(`${point.date}T00:00:00+08:00`) >= cutoff);
}

function buildChartPoints(data: FundNavPoint[]) {
  const width = 720;
  const height = 250;
  const minNav = Math.min(...data.map((point) => point.nav));
  const maxNav = Math.max(...data.map((point) => point.nav));
  const range = maxNav - minNav || 1;

  return data.map((point, index) => ({
    ...point,
    x: data.length === 1 ? width / 2 : (index / (data.length - 1)) * width,
    y: 15 + height - ((point.nav - minNav) / range) * height,
  }));
}

function formatDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "zh" ? "zh-CN" : "en-GB", {
    day: "numeric",
    month: locale === "zh" ? "long" : "short",
    year: "numeric",
    timeZone: "Asia/Kuala_Lumpur",
  }).format(new Date(`${date}T00:00:00+08:00`));
}
