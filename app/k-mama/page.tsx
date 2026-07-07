import type { Metadata } from "next";
import kMamaContent from "@/content/page.k-mama.en.json";
import siteCore from "@/content/global.site-core.en.json";
import seoKeywords from "@/content/global.seo-keywords.en.json";
import officialLinks from "@/content/global.official-links.registry.json";
import { PageKMamaComposer } from "@/components/pages/PageKMamaComposer";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: kMamaContent.title,
  description: kMamaContent.intro,
  path: "/k-mama",
  keywords: [...seoKeywords.core, ...seoKeywords.kMama],
});

type ColoringBookEdition = { label: string; linkKey: string };
const coloringBookRegistry: Record<string, { asin: string; url: string }> =
  officialLinks.kMamaColoringBook;

const coloringBooksSection = kMamaContent.sections.find(
  (section) => section.key === "coloring-books",
);
const coloringBookEditions: ColoringBookEdition[] =
  (coloringBooksSection?.editions as ColoringBookEdition[] | undefined) ?? [];

const kMamaJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Brand",
      name: kMamaContent.title,
      description: kMamaContent.intro,
      url: `${siteCore.domain}/k-mama`,
      founder: { "@type": "Person", name: siteCore.name },
    },
    ...coloringBookEditions.map((edition) => ({
      "@type": "Book",
      name: "K-MAMA's Luxury Fashion Coloring Book",
      inLanguage: edition.label,
      author: { "@type": "Person", name: siteCore.name },
      url: coloringBookRegistry[edition.linkKey].url,
      sku: coloringBookRegistry[edition.linkKey].asin,
    })),
  ],
};

export default function KMamaPage() {
  return (
    <>
      <JsonLd data={kMamaJsonLd} />
      <PageKMamaComposer />
    </>
  );
}
