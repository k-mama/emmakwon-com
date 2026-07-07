import type { Metadata } from "next";
import worksContent from "@/content/page.works.en.json";
import siteCore from "@/content/global.site-core.en.json";
import seoKeywords from "@/content/global.seo-keywords.en.json";
import { PageWorksComposer } from "@/components/pages/PageWorksComposer";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: worksContent.title,
  description: worksContent.intro,
  path: "/works",
  keywords: [...seoKeywords.core, ...seoKeywords.works],
});

const worksJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: worksContent.title,
  description: worksContent.intro,
  url: `${siteCore.domain}/works`,
};

export default function WorksPage() {
  return (
    <>
      <JsonLd data={worksJsonLd} />
      <PageWorksComposer />
    </>
  );
}
