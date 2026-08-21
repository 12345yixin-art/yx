import type { Metadata } from "next";
import "./globals.css";
import { HtmlLangSetter } from "@/components/layout/HtmlLangSetter";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { sharedOpenGraphImages, sharedTwitterImages } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "ARK Legacy Partner | Financial Planning & Insurance Malaysia",
    template: "%s | ARK Legacy Partner",
  },
  description:
    "Financial planning, protection, legacy and business solutions for individuals, families and businesses in Malaysia.",
  openGraph: {
    title: "ARK Legacy Partner | Financial Planning & Insurance Malaysia",
    description:
      "Financial planning, protection, legacy and business solutions for individuals, families and businesses in Malaysia.",
    images: sharedOpenGraphImages,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARK Legacy Partner | Financial Planning & Insurance Malaysia",
    description:
      "Financial planning, protection, legacy and business solutions for individuals, families and businesses in Malaysia.",
    images: sharedTwitterImages,
  },
  icons: {
    icon: "/ark-logo.jpg",
    shortcut: "/ark-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <HtmlLangSetter />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
