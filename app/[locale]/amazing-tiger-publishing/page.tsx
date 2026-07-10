import type { Metadata } from "next";
import {
  getContent,
  type SiteCoreContent,
  type SeoKeywordsContent,
  type PublishingContent,
} from "@/lib/content";
import { generateLocaleStaticParams, type Locale } from "@/lib/i18n/locales";
import { buildPageMetadata } from "@/lib/seo";
import { PageAmazingTigerPublishingComposer } from "@/components/pages/PageAmazingTigerPublishingComposer";
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
  const publishingContent = getContent<PublishingContent>(
    locale,
    "page.amazing-tiger-publishing",
  );
  const seoKeywords = getContent<SeoKeywordsContent>(locale, "global.seo-keywords");

  return buildPageMetadata({
    title: publishingContent.title,
    description: publishingContent.intro,
    path: "/amazing-tiger-publishing",
    keywords: [...seoKeywords.core, ...seoKeywords.publishing],
    locale,
  });
}

export default async function AmazingTigerPublishingPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const publishingContent = getContent<PublishingContent>(
    locale,
    "page.amazing-tiger-publishing",
  );
  const siteCore = getContent<SiteCoreContent>(locale, "global.site-core");

  const publishingJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: publishingContent.title,
    description: publishingContent.intro,
    url: `${siteCore.domain}/${locale}/amazing-tiger-publishing`,
    founder: { "@type": "Person", name: siteCore.name },
  };

  return (
    <>
      <JsonLd data={publishingJsonLd} />
      <PageAmazingTigerPublishingComposer locale={locale} />
    </>
  );
}
