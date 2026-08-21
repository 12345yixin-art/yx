import type { Dictionary } from "@/messages";
import type { Locale } from "@/lib/i18n";
import { localizePath } from "@/lib/i18n";

export type NavItem = {
  label: string;
  href: string;
};

export function getNavigationItems(locale: Locale, dictionary: Dictionary): NavItem[] {
  return [
    { label: dictionary.nav.home, href: localizePath(locale, "/") },
    { label: dictionary.nav.about, href: localizePath(locale, "/about") },
    { label: dictionary.nav.services, href: localizePath(locale, "/services") },
    { label: dictionary.nav.funds, href: localizePath(locale, "/funds") },
    { label: dictionary.nav.insights, href: localizePath(locale, "/insights") },
    { label: dictionary.nav.faq, href: localizePath(locale, "/faq") },
    { label: dictionary.nav.contact, href: localizePath(locale, "/contact") },
  ];
}

export function getLegalItems(locale: Locale, dictionary: Dictionary): NavItem[] {
  const paths = ["/privacy", "/terms", "/risk-disclosure", "/disclaimer"];
  return dictionary.footer.legalItems.map((label, index) => ({
    label,
    href: localizePath(locale, paths[index]),
  }));
}

export function getServiceItems(locale: Locale, dictionary: Dictionary): NavItem[] {
  return dictionary.footer.serviceItems.map((label) => ({
    label,
    href: localizePath(locale, "/services"),
  }));
}
