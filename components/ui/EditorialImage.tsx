import Image from "next/image";
import { brandImages, type BrandImageKey } from "@/data/brand-images";
import type { Locale } from "@/lib/i18n";

type EditorialImageProps = {
  image: BrandImageKey;
  locale: Locale;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes: string;
};

export function EditorialImage({
  image,
  locale,
  className = "",
  imageClassName = "",
  priority = false,
  sizes,
}: EditorialImageProps) {
  const asset = brandImages[image];

  return (
    <div className={`relative overflow-hidden bg-[var(--ark-navy)] ${className}`}>
      <Image
        src={asset.src}
        alt={asset.alt[locale]}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover ${asset.objectPosition} ${imageClassName}`}
      />
    </div>
  );
}
