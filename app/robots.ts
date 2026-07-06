import type { MetadataRoute } from "next";
import siteCore from "@/content/global.site-core.en.json";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteCore.domain}/sitemap.xml`,
  };
}
