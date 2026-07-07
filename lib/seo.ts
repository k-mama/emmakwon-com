import type { Metadata } from "next";
import siteCore from "@/content/global.site-core.en.json";

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  ogType = "website",
}: {
  title: string;
  description: string;
  path: string;
  keywords: readonly string[];
  ogType?: "website" | "book";
}): Metadata {
  return {
    title,
    description,
    keywords: [...keywords],
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${siteCore.name}`,
      description,
      url: `${siteCore.domain}${path}`,
      siteName: siteCore.name,
      locale: siteCore.locale,
      type: ogType,
    },
  };
}
