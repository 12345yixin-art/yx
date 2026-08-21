import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  compact?: boolean;
  href?: string;
  showText?: boolean;
  tone?: "dark" | "light";
  boxed?: boolean;
};

export function Logo({
  compact = false,
  href = "/",
  showText = true,
  tone = "dark",
  boxed = false,
}: LogoProps) {
  const textColor = tone === "light" ? "text-white" : "text-[var(--ark-navy)]";

  return (
    <Link
      href={href}
      className="inline-flex min-w-0 items-center gap-2.5 rounded-sm"
      aria-label="ARK Legacy Partner home"
    >
      <Image
        src="/ark-logo.jpg"
        alt="ARK Legacy Partner logo"
        width={compact ? 38 : 44}
        height={compact ? 38 : 44}
        className={`${compact ? "h-9 w-9" : "h-10 w-10 sm:h-11 sm:w-11"} shrink-0 object-contain ${
          boxed ? "bg-white p-1" : ""
        }`}
        priority
      />
      {showText ? (
        <span className="hidden min-w-0 leading-tight sm:block">
          <span className={`block font-serif text-[0.82rem] font-semibold tracking-[0.08em] ${textColor}`}>
            ARK LEGACY
          </span>
          <span className={`block font-serif text-[0.82rem] font-semibold tracking-[0.08em] ${textColor}`}>
            PARTNER
          </span>
        </span>
      ) : null}
    </Link>
  );
}
