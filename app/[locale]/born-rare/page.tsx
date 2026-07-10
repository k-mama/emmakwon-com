import type { Metadata } from "next";
import officialLinks from "@/content/global.official-links.registry.json";
import {
  getContent,
  type SiteCoreContent,
  type SeoKeywordsContent,
  type BornRareContent,
} from "@/lib/content";
import { generateLocaleStaticParams, type Locale } from "@/lib/i18n/locales";
import { buildPageMetadata } from "@/lib/seo";
import { PageBornRareComposer } from "@/components/pages/PageBornRareComposer";
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
  const bornRareContent = getContent<BornRareContent>(locale, "page.born-rare");
  const seoKeywords = getContent<SeoKeywordsContent>(locale, "global.seo-keywords");

  return buildPageMetadata({
    title: bornRareContent.title,
    description: bornRareContent.intro,
    path: "/born-rare",
    keywords: [...seoKeywords.core, ...seoKeywords.bornRare],
    locale,
    ogType: "book",
  });
}

export default async function BornRarePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const bornRareContent = getContent<BornRareContent>(locale, "page.born-rare");
  const siteCore = getContent<SiteCoreContent>(locale, "global.site-core");

  const bornRareJsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: bornRareContent.title,
    author: { "@type": "Person", name: siteCore.name },
    description: bornRareContent.intro,
    url: `${siteCore.domain}/${locale}/born-rare`,
    workExample: [
      { bookFormat: "https://schema.org/EBook", url: officialLinks.bornRare.kindleUrl },
      { bookFormat: "https://schema.org/Paperback", url: officialLinks.bornRare.paperbackUrl },
      { bookFormat: "https://schema.org/Hardcover", url: officialLinks.bornRare.hardcoverUrl },
    ].map((edition) => ({ "@type": "Book", ...edition })),
  };

  return (
    <>
      <JsonLd data={bornRareJsonLd} />
      <PageBornRareComposer locale={locale} />
    </>
  );
}
