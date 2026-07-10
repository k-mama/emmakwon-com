import type { Metadata } from "next";
import siteCore from "@/content/en/global.site-core.json";
import { locales, defaultLocale, localeOgLocale, type Locale } from "@/lib/i18n/locales";

function buildLanguageAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[locale] = `${siteCore.domain}/${locale}${path}`;
  }
  languages["x-default"] = `${siteCore.domain}/${defaultLocale}${path}`;
  return languages;
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  locale,
  ogType = "website",
}: {
  title: string;
  description: string;
  path: string;
  keywords: readonly string[];
  locale: Locale;
  ogType?: "website" | "book";
}): Metadata {
  return {
    title,
    description,
    keywords: [...keywords],
    alternates: {
      canonical: `/${locale}${path}`,
      languages: buildLanguageAlternates(path),
    },
    openGraph: {
      title: `${title} | ${siteCore.name}`,
      description,
      url: `${siteCore.domain}/${locale}${path}`,
      siteName: siteCore.name,
      locale: localeOgLocale[locale],
      type: ogType,
    },
  };
}
