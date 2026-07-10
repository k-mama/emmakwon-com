import type { Metadata } from "next";
import {
  getContent,
  type SiteCoreContent,
  type SeoKeywordsContent,
  type ContactContent,
} from "@/lib/content";
import { generateLocaleStaticParams, type Locale } from "@/lib/i18n/locales";
import { buildPageMetadata } from "@/lib/seo";
import { PageContactComposer } from "@/components/pages/PageContactComposer";
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
  const contactContent = getContent<ContactContent>(locale, "page.contact");
  const seoKeywords = getContent<SeoKeywordsContent>(locale, "global.seo-keywords");

  return buildPageMetadata({
    title: contactContent.title,
    description: contactContent.intro,
    path: "/contact",
    keywords: seoKeywords.core,
    locale,
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const contactContent = getContent<ContactContent>(locale, "page.contact");
  const siteCore = getContent<SiteCoreContent>(locale, "global.site-core");

  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: contactContent.title,
    url: `${siteCore.domain}/${locale}/contact`,
  };

  return (
    <>
      <JsonLd data={contactJsonLd} />
      <PageContactComposer locale={locale} />
    </>
  );
}
