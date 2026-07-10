import type { Metadata } from "next";
import officialLinks from "@/content/global.official-links.registry.json";
import { getContent, type SiteCoreContent, type SeoKeywordsContent } from "@/lib/content";
import { generateLocaleStaticParams, type Locale } from "@/lib/i18n/locales";
import { buildPageMetadata } from "@/lib/seo";
import { PageHomeComposer } from "@/components/pages/PageHomeComposer";
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
  const siteCore = getContent<SiteCoreContent>(locale, "global.site-core");
  const seoKeywords = getContent<SeoKeywordsContent>(locale, "global.seo-keywords");

  return buildPageMetadata({
    title: siteCore.defaultTitle,
    description: siteCore.description,
    path: "",
    keywords: seoKeywords.core,
    locale,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const siteCore = getContent<SiteCoreContent>(locale, "global.site-core");

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

  return (
    <>
      <JsonLd data={homeJsonLd} />
      <PageHomeComposer locale={locale} />
    </>
  );
}
