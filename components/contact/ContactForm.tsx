"use client";

import Link from "next/link";
import { useId, useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/messages";

type FormState = {
  name: string;
  phone: string;
  email: string;
  topic: string;
  message: string;
  consent: boolean;
};

type ErrorState = Partial<Record<keyof Pick<FormState, "name" | "topic" | "consent"> | "contact", string>>;

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  topic: "",
  message: "",
  consent: false,
};

export function ContactForm({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  const form = dictionary.contactPage.form;
  const fieldId = useId();
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<ErrorState>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(nextValues: FormState) {
    const nextErrors: ErrorState = {};

    if (!nextValues.name.trim()) {
      nextErrors.name = form.errors.name;
    }

    if (!nextValues.phone.trim() && !nextValues.email.trim()) {
      nextErrors.contact = form.errors.contact;
    }

    if (!nextValues.topic) {
      nextErrors.topic = form.errors.topic;
    }

    if (!nextValues.consent) {
      nextErrors.consent = form.errors.consent;
    }

    return nextErrors;
  }

  function updateField<Key extends keyof FormState>(key: Key, value: FormState[Key]) {
    setValues((current) => ({ ...current, [key]: value }));
    setSubmitted(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    // TODO: Connect approved form submission workflow before production.
    setSubmitted(true);
  }

  const contactErrorId = `${fieldId}-contact-error`;

  return (
    <form
      className="border-y border-[var(--ark-border)] py-8"
      noValidate
      onSubmit={handleSubmit}
    >
      <h2 className="font-serif text-3xl font-semibold text-[var(--ark-navy)]">
        {form.title}
      </h2>

      <div className="mt-8 grid gap-5">
        <Field
          error={errors.name}
          id={`${fieldId}-name`}
          label={form.name}
        >
          <input
            aria-describedby={errors.name ? `${fieldId}-name-error` : undefined}
            aria-invalid={Boolean(errors.name)}
            className="w-full border border-[var(--ark-border)] bg-white px-4 py-3 text-base text-[var(--ark-navy)] outline-none transition focus:border-[var(--ark-gold)]"
            id={`${fieldId}-name`}
            name="name"
            type="text"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
          />
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            error={errors.contact}
            errorId={contactErrorId}
            id={`${fieldId}-phone`}
            label={form.phone}
          >
            <input
              aria-describedby={errors.contact ? contactErrorId : undefined}
              aria-invalid={Boolean(errors.contact)}
              className="w-full border border-[var(--ark-border)] bg-white px-4 py-3 text-base text-[var(--ark-navy)] outline-none transition focus:border-[var(--ark-gold)]"
              id={`${fieldId}-phone`}
              name="phone"
              type="tel"
              value={values.phone}
              onChange={(event) => updateField("phone", event.target.value)}
            />
          </Field>

          <Field
            error={errors.contact}
            errorId={contactErrorId}
            hideError
            id={`${fieldId}-email`}
            label={form.email}
          >
            <input
              aria-describedby={errors.contact ? contactErrorId : undefined}
              aria-invalid={Boolean(errors.contact)}
              className="w-full border border-[var(--ark-border)] bg-white px-4 py-3 text-base text-[var(--ark-navy)] outline-none transition focus:border-[var(--ark-gold)]"
              id={`${fieldId}-email`}
              name="email"
              type="email"
              value={values.email}
              onChange={(event) => updateField("email", event.target.value)}
            />
          </Field>
        </div>

        <Field
          error={errors.topic}
          id={`${fieldId}-topic`}
          label={form.topic}
        >
          <select
            aria-describedby={errors.topic ? `${fieldId}-topic-error` : undefined}
            aria-invalid={Boolean(errors.topic)}
            className="w-full border border-[var(--ark-border)] bg-white px-4 py-3 text-base text-[var(--ark-navy)] outline-none transition focus:border-[var(--ark-gold)]"
            id={`${fieldId}-topic`}
            name="topic"
            value={values.topic}
            onChange={(event) => updateField("topic", event.target.value)}
          >
            <option value="">{form.topicPlaceholder}</option>
            {form.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field id={`${fieldId}-message`} label={form.message}>
          <textarea
            className="min-h-36 w-full resize-y border border-[var(--ark-border)] bg-white px-4 py-3 text-base text-[var(--ark-navy)] outline-none transition focus:border-[var(--ark-gold)]"
            id={`${fieldId}-message`}
            name="message"
            placeholder={form.messagePlaceholder}
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
          />
        </Field>

        <div>
          <label className="flex gap-3 text-sm leading-7 text-[var(--ark-gray)]">
            <input
              aria-describedby={errors.consent ? `${fieldId}-consent-error` : undefined}
              aria-invalid={Boolean(errors.consent)}
              checked={values.consent}
              className="mt-1 h-5 w-5 shrink-0 accent-[var(--ark-gold)]"
              type="checkbox"
              onChange={(event) => updateField("consent", event.target.checked)}
            />
            <span>
              {/* TODO: Final PDPA wording requires legal/compliance review before production launch. */}
              {form.consentBefore}
              <Link className="font-semibold text-[var(--ark-navy)] underline underline-offset-4" href={`/${locale}/privacy`}>
                {form.privacyPolicy}
              </Link>
              {form.consentAfter}
            </span>
          </label>
          {errors.consent ? (
            <p className="mt-2 text-sm font-semibold text-red-700" id={`${fieldId}-consent-error`}>
              {errors.consent}
            </p>
          ) : null}
        </div>

        <div>
          <button
            className="ark-button ark-button-primary inline-flex min-h-11 items-center justify-center rounded-[var(--ark-radius)] border px-5 py-3 text-sm font-semibold transition-colors duration-200"
            type="submit"
          >
            {form.submit}
          </button>
        </div>

        {submitted ? (
          <div className="border-l border-[var(--ark-gold)] bg-[var(--ark-warm-white)] px-5 py-4" role="status">
            <p className="font-serif text-2xl font-semibold text-[var(--ark-navy)]">
              {form.successTitle}
            </p>
            <p className="mt-2 text-sm leading-7 text-[var(--ark-gray)]">
              {form.successCopy}
            </p>
          </div>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  children,
  error,
  errorId,
  hideError = false,
  id,
  label,
}: {
  children: React.ReactNode;
  error?: string;
  errorId?: string;
  hideError?: boolean;
  id: string;
  label: string;
}) {
  const resolvedErrorId = errorId ?? `${id}-error`;

  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[var(--ark-navy)]" htmlFor={id}>
        {label}
      </label>
      {children}
      {error && !hideError ? (
        <p className="mt-2 text-sm font-semibold text-red-700" id={resolvedErrorId}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
