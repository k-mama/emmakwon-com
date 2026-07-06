import type { Metadata } from "next";
import emmaestroContent from "@/content/page.emmaestro.en.json";
import { PageEmmaestroComposer } from "@/components/pages/PageEmmaestroComposer";

export const metadata: Metadata = {
  title: emmaestroContent.title,
  description: emmaestroContent.intro,
};

export default function EmmaestroPage() {
  return <PageEmmaestroComposer />;
}
