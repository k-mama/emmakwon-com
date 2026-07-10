import fs from "node:fs";
import path from "node:path";
import type { Locale } from "@/lib/i18n/locales";

const cache = new Map<string, unknown>();

export function getContent<T>(locale: Locale, fileName: string): T {
  const cacheKey = `${locale}/${fileName}`;
  const cached = cache.get(cacheKey);
  if (cached !== undefined) return cached as T;

  const filePath = path.join(process.cwd(), "content", locale, `${fileName}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, "utf8")) as T;
  cache.set(cacheKey, data);
  return data;
}

export type SiteCoreContent = typeof import("@/content/en/global.site-core.json");
export type NavigationContent = typeof import("@/content/en/global.primary-navigation.json");
export type SeoKeywordsContent = typeof import("@/content/en/global.seo-keywords.json");
export type UiStringsContent = typeof import("@/content/en/global.ui-strings.json");
export type HomeContent = typeof import("@/content/en/page.home.json");
export type EmmaestroContent = typeof import("@/content/en/page.emmaestro.json");
export type BornRareContent = typeof import("@/content/en/page.born-rare.json");
export type PublishingContent = typeof import("@/content/en/page.amazing-tiger-publishing.json");
export type WorksContent = typeof import("@/content/en/page.works.json");
export type KMamaContent = typeof import("@/content/en/page.k-mama.json");
export type ContactContent = typeof import("@/content/en/page.contact.json");
