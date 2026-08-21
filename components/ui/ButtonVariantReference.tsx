import { Button } from "@/components/ui/Button";

const variants = [
  ["Primary", "primary"],
  ["Secondary", "secondary"],
  ["Inverted", "inverted"],
  ["Ghost", "ghost"],
  ["Ghost Inverted", "ghostInverted"],
  ["Dark Secondary", "darkSecondary"],
] as const;

export function ButtonVariantReference() {
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <div className="grid gap-6 bg-[var(--ark-warm-white)] p-6">
      <div className="flex flex-wrap gap-3">
        {variants.slice(0, 4).map(([label, variant]) => (
          <Button key={variant} href="#" variant={variant}>
            {label}
          </Button>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 bg-[var(--ark-navy)] p-6">
        {variants.slice(2).map(([label, variant]) => (
          <Button key={variant} href="#" variant={variant}>
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
}
