import type { Metadata } from "next";
import bornRareContent from "@/content/page.born-rare.en.json";
import siteCore from "@/content/global.site-core.en.json";
import seoKeywords from "@/content/global.seo-keywords.en.json";
import officialLinks from "@/content/global.official-links.registry.json";
import { PageBornRareComposer } from "@/components/pages/PageBornRareComposer";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: bornRareContent.title,
  description: bornRareContent.intro,
  path: "/born-rare",
  keywords: [...seoKeywords.core, ...seoKeywords.bornRare],
  ogType: "book",
});

const bornRareJsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: bornRareContent.title,
  author: { "@type": "Person", name: siteCore.name },
  description: bornRareContent.intro,
  url: `${siteCore.domain}/born-rare`,
  workExample: [
    { bookFormat: "https://schema.org/EBook", url: officialLinks.bornRare.kindleUrl },
    { bookFormat: "https://schema.org/Paperback", url: officialLinks.bornRare.paperbackUrl },
    { bookFormat: "https://schema.org/Hardcover", url: officialLinks.bornRare.hardcoverUrl },
  ].map((edition) => ({ "@type": "Book", ...edition })),
};

export default function BornRarePage() {
  return (
    <>
      <JsonLd data={bornRareJsonLd} />
      <PageBornRareComposer />
    </>
  );
}
