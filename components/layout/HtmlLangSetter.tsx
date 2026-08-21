"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { getLocaleFromPathname } from "@/lib/i18n";

export function HtmlLangSetter() {
  const pathname = usePathname();

  useEffect(() => {
    const locale = getLocaleFromPathname(pathname);
    document.documentElement.lang = locale === "zh" ? "zh-Hans" : "en";
  }, [pathname]);

  return null;
}
