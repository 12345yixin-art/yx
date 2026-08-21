import type { Metadata } from "next";

export const sharedOpenGraphImages: NonNullable<Metadata["openGraph"]>["images"] = [
  {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: "ARK Legacy Partner",
  },
];

export const sharedTwitterImages = ["/opengraph-image"];
