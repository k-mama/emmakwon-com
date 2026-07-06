import type { Metadata } from "next";
import publishingContent from "@/content/page.amazing-tiger-publishing.en.json";
import { PageAmazingTigerPublishingComposer } from "@/components/pages/PageAmazingTigerPublishingComposer";

export const metadata: Metadata = {
  title: publishingContent.title,
  description: publishingContent.intro,
};

export default function AmazingTigerPublishingPage() {
  return <PageAmazingTigerPublishingComposer />;
}
