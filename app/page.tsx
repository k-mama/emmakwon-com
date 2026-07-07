import type { Metadata } from "next";
import siteCore from "@/content/global.site-core.en.json";
import seoKeywords from "@/content/global.seo-keywords.en.json";
import officialLinks from "@/content/global.official-links.registry.json";
import { PageHomeComposer } from "@/components/pages/PageHomeComposer";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: siteCore.defaultTitle,
  description: siteCore.description,
  keywords: seoKeywords.core,
  alternates: { canonical: "/" },
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: siteCore.name,
      url: siteCore.domain,
      jobTitle: "Author, Music Maker, Publisher, Designer",
      description: siteCore.description,
      sameAs: [officialLinks.instagram.url],
    },
    {
      "@type": "WebSite",
      name: siteCore.name,
      url: siteCore.domain,
      description: siteCore.description,
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeJsonLd} />
      <PageHomeComposer />
    </>
  );
}
