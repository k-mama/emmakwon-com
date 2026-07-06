import type { Metadata } from "next";
import bornRareContent from "@/content/page.born-rare.en.json";
import { PageBornRareComposer } from "@/components/pages/PageBornRareComposer";

export const metadata: Metadata = {
  title: bornRareContent.title,
  description: bornRareContent.intro,
};

export default function BornRarePage() {
  return <PageBornRareComposer />;
}
