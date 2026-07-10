import type { Metadata } from "next";
import officialLinks from "@/content/global.official-links.registry.json";
import {
  getContent,
  type SiteCoreContent,
  type SeoKeywordsContent,
  type KMamaContent,
} from "@/lib/content";
import { generateLocaleStaticParams, type Locale } from "@/lib/i18n/locales";
import { buildPageMetadata } from "@/lib/seo";
import { PageKMamaComposer } from "@/components/pages/PageKMamaComposer";
import { JsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return generateLocaleStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const kMamaContent = getContent<KMamaContent>(locale, "page.k-mama");
  const seoKeywords = getContent<SeoKeywordsContent>(locale, "global.seo-keywords");

  return buildPageMetadata({
    title: kMamaContent.title,
    description: kMamaContent.intro,
    path: "/k-mama",
    keywords: [...seoKeywords.core, ...seoKeywords.kMama],
    locale,
  });
}

type ColoringBookEdition = { label: string; linkKey: string };
const coloringBookRegistry: Record<string, { asin: string; url: string }> =
  officialLinks.kMamaColoringBook;

export default async function KMamaPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const kMamaContent = getContent<KMamaContent>(locale, "page.k-mama");
  const siteCore = getContent<SiteCoreContent>(locale, "global.site-core");

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
        url: `${siteCore.domain}/${locale}/k-mama`,
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

  return (
    <>
      <JsonLd data={kMamaJsonLd} />
      <PageKMamaComposer locale={locale} />
    </>
  );
}
