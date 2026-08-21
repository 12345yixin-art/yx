"use client";

import { useId, useState } from "react";

export function FaqAccordion({
  answer,
  question,
}: {
  answer: string;
  question: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();
  const contentId = `${id}-content`;

  return (
    <div className="border-b border-[var(--ark-border)] py-6">
      <button
        aria-controls={contentId}
        aria-expanded={isOpen}
        className="group flex w-full items-start justify-between gap-6 text-left outline-none"
        type="button"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="font-serif text-2xl font-semibold leading-tight text-[var(--ark-navy)] transition group-hover:text-[var(--ark-gold)] sm:text-3xl">
          {question}
        </span>
        <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center border border-[var(--ark-border)] text-lg leading-none text-[var(--ark-navy)] transition group-hover:border-[var(--ark-gold)] group-hover:text-[var(--ark-gold)]">
          {isOpen ? "-" : "+"}
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-200 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        id={contentId}
      >
        <div className="overflow-hidden">
          <div className="max-w-3xl whitespace-pre-line pt-5 text-base leading-8 text-[var(--ark-gray)]">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}
