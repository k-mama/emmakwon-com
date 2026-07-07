import type { Metadata } from "next";
import contactContent from "@/content/page.contact.en.json";
import siteCore from "@/content/global.site-core.en.json";
import seoKeywords from "@/content/global.seo-keywords.en.json";
import { PageContactComposer } from "@/components/pages/PageContactComposer";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: contactContent.title,
  description: contactContent.intro,
  path: "/contact",
  keywords: seoKeywords.core,
});

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: contactContent.title,
  url: `${siteCore.domain}/contact`,
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactJsonLd} />
      <PageContactComposer />
    </>
  );
}
