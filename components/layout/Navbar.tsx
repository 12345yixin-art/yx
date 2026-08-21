"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getLocaleFromPathname, switchLocalePath } from "@/lib/i18n";
import { getNavigationItems } from "@/lib/navigation";
import { getDictionary } from "@/messages";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dictionary = getDictionary(locale);
  const navigationItems = getNavigationItems(locale, dictionary);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isHomeTop = (pathname === "/" || pathname === `/${locale}`) && !isScrolled && !isOpen;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur transition ${
        isHomeTop
          ? "border-white/10 bg-[var(--ark-navy)]/82"
          : isScrolled
            ? "border-[var(--ark-border)] bg-white/95"
            : "border-transparent bg-white/95"
      }`}
    >
      <Container>
        <nav className="flex min-h-16 items-center justify-between gap-4" aria-label="Primary navigation">
          <Logo href={`/${locale}`} tone={isHomeTop ? "light" : "dark"} boxed={isHomeTop} />
          <div className="hidden items-center gap-3 min-[980px]:flex min-[1120px]:gap-5">
            {navigationItems.map((item) => {
              const isActive = isActiveNavItem(pathname, item.href, locale);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={isActive ? { color: "var(--ark-gold)" } : undefined}
                  className={`group relative text-[0.84rem] font-semibold transition hover:text-[var(--ark-gold)] ${
                    isActive
                      ? "text-[var(--ark-gold)]"
                      : isHomeTop
                        ? "text-slate-200"
                        : "text-[var(--ark-navy)]"
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--ark-gold)] transition-all duration-300 group-hover:w-full" />
                </Link>
              );
            })}
          </div>
          <div className="hidden items-center gap-3 min-[980px]:flex min-[1120px]:gap-4">
            <LanguageSwitcher pathname={pathname} locale={locale} dark={isHomeTop} />
            <Button
              href={`/${locale}/contact`}
              className="min-h-10 px-3.5 py-2.5 text-[0.82rem] min-[1120px]:px-4"
              variant={isHomeTop ? "inverted" : "primary"}
            >
              {dictionary.nav.book}
            </Button>
          </div>
          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-[var(--ark-radius)] border min-[980px]:hidden ${
              isHomeTop
                ? "border-white/20 text-white"
                : "border-[var(--ark-border)] text-[var(--ark-navy)]"
            }`}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
          </button>
        </nav>
      </Container>
      {isOpen ? (
        <div id="mobile-navigation" className="border-t border-[var(--ark-border)] bg-white min-[980px]:hidden">
          <Container className="py-5">
            <div className="grid gap-2">
              {navigationItems.map((item) => {
                const isActive = isActiveNavItem(pathname, item.href, locale);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-[var(--ark-radius)] px-3 py-3 text-base font-semibold text-[var(--ark-navy)] hover:bg-[var(--ark-warm-white)]"
                    style={isActive ? { color: "var(--ark-gold)" } : undefined}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="mt-3 flex items-center gap-3 border-t border-[var(--ark-border)] pt-4">
                <Link
                  href={switchLocalePath(pathname, "en")}
                  className={`text-sm font-bold ${locale === "en" ? "text-[var(--ark-gold)]" : "text-[var(--ark-navy)]"}`}
                  onClick={() => setIsOpen(false)}
                >
                  English
                </Link>
                <span className="h-4 w-px bg-[var(--ark-border)]" />
                <Link
                  href={switchLocalePath(pathname, "zh")}
                  className={`text-sm font-bold ${locale === "zh" ? "text-[var(--ark-gold)]" : "text-[var(--ark-navy)]"}`}
                  onClick={() => setIsOpen(false)}
                >
                  中文
                </Link>
              </div>
              <Button href={`/${locale}/contact`} className="mt-3 w-full" onClick={() => setIsOpen(false)}>
                {dictionary.nav.book}
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

function isActiveNavItem(pathname: string, href: string, locale: "en" | "zh") {
  return pathname === href || (href !== `/${locale}` && pathname.startsWith(`${href}/`));
}

function LanguageSwitcher({
  pathname,
  locale,
  dark,
}: {
  pathname: string;
  locale: "en" | "zh";
  dark: boolean;
}) {
  const baseClass = dark ? "text-slate-300 hover:text-white" : "text-[var(--ark-gray)] hover:text-[var(--ark-navy)]";
  const activeClass = dark ? "text-[var(--ark-gold-soft)]" : "text-[var(--ark-gold)]";

  return (
    <div className="flex items-center gap-2 text-[0.78rem] font-bold" aria-label="Language switcher">
      <Link className={locale === "en" ? activeClass : baseClass} href={switchLocalePath(pathname, "en")}>
        EN
      </Link>
      <span className={dark ? "text-white/30" : "text-[var(--ark-border)]"}>|</span>
      <Link className={locale === "zh" ? activeClass : baseClass} href={switchLocalePath(pathname, "zh")}>
        中文
      </Link>
    </div>
  );
}
