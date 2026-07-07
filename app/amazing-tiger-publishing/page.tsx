import type { Metadata } from "next";
import publishingContent from "@/content/page.amazing-tiger-publishing.en.json";
import siteCore from "@/content/global.site-core.en.json";
import seoKeywords from "@/content/global.seo-keywords.en.json";
import { PageAmazingTigerPublishingComposer } from "@/components/pages/PageAmazingTigerPublishingComposer";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: publishingContent.title,
  description: publishingContent.intro,
  path: "/amazing-tiger-publishing",
  keywords: [...seoKeywords.core, ...seoKeywords.publishing],
});

const publishingJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: publishingContent.title,
  description: publishingContent.intro,
  url: `${siteCore.domain}/amazing-tiger-publishing`,
  founder: { "@type": "Person", name: siteCore.name },
};

export default function AmazingTigerPublishingPage() {
  return (
    <>
      <JsonLd data={publishingJsonLd} />
      <PageAmazingTigerPublishingComposer />
    </>
  );
}
