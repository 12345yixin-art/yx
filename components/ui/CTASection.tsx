"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getLocaleFromPathname } from "@/lib/i18n";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Start Your Financial Conversation",
  description = "A structured consultation helps clarify priorities, protection needs and long-term planning options before decisions are made.",
}: CTASectionProps) {
  const locale = getLocaleFromPathname(usePathname());
  const resolvedTitle = locale === "zh" && title === "Start Your Financial Conversation" ? "从一次清晰对话开始" : title;
  const resolvedDescription =
    locale === "zh" && description.startsWith("A structured consultation")
      ? "一次有结构的咨询，可以帮助你厘清重点、保障需要与长期规划方向。"
      : description;
  const label = locale === "zh" ? "预约咨询" : "Book a Consultation";

  return (
    <section className="bg-[var(--ark-navy)] py-16 text-white sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="ark-section-label ark-section-label-soft mb-3">
              Consultation
            </p>
            <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              {resolvedTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-200">
              {resolvedDescription}
            </p>
          </div>
          <Button href={`/${locale}/contact`} variant="light">
            {label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
