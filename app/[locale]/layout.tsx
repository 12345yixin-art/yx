import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { isLocale } from "@/lib/i18n";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const lang = locale === "zh" ? "zh-Hans" : "en";

  return (
    <div lang={lang} className={locale === "zh" ? "lang-zh" : "lang-en"}>
      {children}
    </div>
  );
}
