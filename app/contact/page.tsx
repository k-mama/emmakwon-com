import type { Metadata } from "next";
import contactContent from "@/content/page.contact.en.json";
import { PageContactComposer } from "@/components/pages/PageContactComposer";

export const metadata: Metadata = {
  title: contactContent.title,
  description: contactContent.intro,
};

export default function ContactPage() {
  return <PageContactComposer />;
}
