import type { Metadata } from "next";
import siteCore from "@/content/global.site-core.en.json";
import { PageHomeComposer } from "@/components/pages/PageHomeComposer";

export const metadata: Metadata = {
  title: siteCore.defaultTitle,
  description: siteCore.description,
};

export default function HomePage() {
  return <PageHomeComposer />;
}
