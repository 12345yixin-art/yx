import Link from "next/link";
import { Mail } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/messages";

export function ContactForm({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  const form = dictionary.contactPage.form;

  return (
    <div className="border-y border-[var(--ark-border)] py-8">
      <h2 className="font-serif text-3xl font-semibold text-[var(--ark-navy)]">
        {form.title}
      </h2>
      <p className="mt-5 max-w-xl text-base leading-8 text-[var(--ark-gray)]">
        {form.copy}
      </p>
      <a
        className="ark-button ark-button-primary mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--ark-radius)] border px-5 py-3 text-sm font-semibold transition-colors duration-200"
        href={`mailto:${form.email}`}
      >
        <Mail aria-hidden="true" size={16} />
        {form.cta}
      </a>
      <p className="mt-6 text-sm leading-7 text-[var(--ark-gray)]">
        {form.consentBefore}
        <Link className="font-semibold text-[var(--ark-navy)] underline underline-offset-4" href={`/${locale}/privacy`}>
          {form.privacyPolicy}
        </Link>
        {form.consentAfter}
      </p>
    </div>
  );
}
