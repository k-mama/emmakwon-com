import type { MetadataRoute } from "next";
import siteCore from "@/content/global.site-core.en.json";

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
  return routes.map(({ path, priority }) => ({
    url: `${siteCore.domain}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
