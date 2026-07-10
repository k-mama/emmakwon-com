import type { Metadata } from "next";
import {
  getContent,
  type SiteCoreContent,
  type SeoKeywordsContent,
  type WorksContent,
} from "@/lib/content";
import { generateLocaleStaticParams, type Locale } from "@/lib/i18n/locales";
import { buildPageMetadata } from "@/lib/seo";
import { PageWorksComposer } from "@/components/pages/PageWorksComposer";
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
  const worksContent = getContent<WorksContent>(locale, "page.works");
  const seoKeywords = getContent<SeoKeywordsContent>(locale, "global.seo-keywords");

  return buildPageMetadata({
    title: worksContent.title,
    description: worksContent.intro,
    path: "/works",
    keywords: [...seoKeywords.core, ...seoKeywords.works],
    locale,
  });
}

export default async function WorksPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const worksContent = getContent<WorksContent>(locale, "page.works");
  const siteCore = getContent<SiteCoreContent>(locale, "global.site-core");

  const worksJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: worksContent.title,
    description: worksContent.intro,
    url: `${siteCore.domain}/${locale}/works`,
  };

  return (
    <>
      <JsonLd data={worksJsonLd} />
      <PageWorksComposer locale={locale} />
    </>
  );
}
