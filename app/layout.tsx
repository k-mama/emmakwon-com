import type { Metadata } from "next";
import { Baloo_2, Manrope } from "next/font/google";
import siteCore from "@/content/global.site-core.en.json";
import { SiteShell } from "@/components/site/SiteShell";
import "./globals.css";

const displayRounded = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const bodySans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteCore.domain),
  title: {
    template: siteCore.titleTemplate,
    default: siteCore.defaultTitle,
  },
  description: siteCore.description,
  openGraph: {
    title: siteCore.defaultTitle,
    description: siteCore.description,
    siteName: siteCore.name,
    locale: siteCore.locale,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayRounded.variable} ${bodySans.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
