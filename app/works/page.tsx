import type { Metadata } from "next";
import worksContent from "@/content/page.works.en.json";
import { PageWorksComposer } from "@/components/pages/PageWorksComposer";

export const metadata: Metadata = {
  title: worksContent.title,
  description: worksContent.intro,
};

export default function WorksPage() {
  return <PageWorksComposer />;
}
