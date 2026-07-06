import type { Metadata } from "next";
import kMamaContent from "@/content/page.k-mama.en.json";
import { PageKMamaComposer } from "@/components/pages/PageKMamaComposer";

export const metadata: Metadata = {
  title: kMamaContent.title,
  description: kMamaContent.intro,
};

export default function KMamaPage() {
  return <PageKMamaComposer />;
}
