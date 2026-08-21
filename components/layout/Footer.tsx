"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { getLocaleFromPathname } from "@/lib/i18n";
import { getLegalItems, getNavigationItems, getServiceItems } from "@/lib/navigation";
import { getDictionary } from "@/messages";

export function Footer() {
  const locale = getLocaleFromPathname(usePathname());
  const dictionary = getDictionary(locale);

  return (
    <footer className="bg-[var(--ark-navy)] text-white">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="inline-flex rounded bg-white p-2">
              <Logo compact href={`/${locale}`} showText={false} />
            </div>
            <p className="mt-6 max-w-md text-sm leading-7 text-slate-300">
              {dictionary.footer.summary}
            </p>
            <p className="mt-4 text-sm text-slate-300">
              {dictionary.footer.contact}
            </p>
          </div>
          <FooterColumn title={dictionary.footer.navigation} items={getNavigationItems(locale, dictionary)} />
          <FooterColumn title={dictionary.footer.services} items={getServiceItems(locale, dictionary)} />
          <FooterColumn title={dictionary.footer.legal} items={getLegalItems(locale, dictionary)} />
        </div>
        <div className="mt-12 border-t border-white/15 pt-6">
          <p className="text-xs leading-6 text-slate-300">
            {dictionary.footer.disclaimer}
          </p>
          <p className="mt-5 text-xs text-slate-400">
            © {new Date().getFullYear()} ARK Legacy Partner. {dictionary.footer.rights}
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--ark-gold-soft)]">
        {title}
      </h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={`${title}-${item.href}-${item.label}`}>
            <Link className="text-sm text-slate-300 transition hover:text-white" href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
