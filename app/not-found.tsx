import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-[var(--ark-warm-white)] py-24 sm:py-32 lg:py-40">
      <div className="absolute right-[10%] top-16 hidden h-48 w-px bg-[var(--ark-gold-soft)] sm:block" />
      <div className="absolute -right-16 bottom-10 h-72 w-72 rounded-full border border-[var(--ark-gold-soft)]/50" />
      <Container>
        <div className="max-w-4xl border-y border-[var(--ark-border)] py-14">
          <p className="ark-section-label">404</p>
          <h1 className="mt-6 max-w-3xl text-balance font-serif text-[3.2rem] font-semibold leading-[1.02] text-[var(--ark-navy)] sm:text-[5rem]">
            This path doesn&apos;t lead where you expected.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--ark-gray)]">
            The page may have moved or may no longer be available.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/en">Return Home</Button>
            <Button href="/en/contact" variant="secondary">
              Contact ARK
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
