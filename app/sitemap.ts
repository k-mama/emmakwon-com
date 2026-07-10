import type { MetadataRoute } from "next";
import siteCore from "@/content/en/global.site-core.json";
import { locales, defaultLocale } from "@/lib/i18n/locales";

export const dynamic = "force-static";

const routes: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/emmaestro", priority: 0.9 },
  { path: "/born-rare", priority: 0.9 },
  { path: "/amazing-tiger-publishing", priority: 0.7 },
  { path: "/works", priority: 0.7 },
  { path: "/k-mama", priority: 0.7 },
  { path: "/contact", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const { path, priority } of routes) {
    const languages: Record<string, string> = {};
    for (const locale of locales) {
      languages[locale] = `${siteCore.domain}/${locale}${path}`;
    }
    languages["x-default"] = `${siteCore.domain}/${defaultLocale}${path}`;

    for (const locale of locales) {
      entries.push({
        url: `${siteCore.domain}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority,
        alternates: { languages },
      });
    }
  }

  return entries;
}
