import type { MetadataRoute } from "next";
import siteCore from "@/content/global.site-core.en.json";

export const dynamic = "force-static";

const routes = [
  "",
  "/emmaestro",
  "/amazing-tiger-publishing",
  "/born-rare",
  "/works",
  "/k-mama",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteCore.domain}${route}`,
    lastModified: new Date(),
  }));
}
