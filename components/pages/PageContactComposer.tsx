import contactContent from "@/content/page.contact.en.json";
import officialLinks from "@/content/global.official-links.registry.json";
import { SharedSectionShell } from "@/components/sections/SharedSectionShell";
import { SharedEditorialPanel } from "@/components/sections/SharedEditorialPanel";
import { VisualHighlightMark } from "@/components/visual/VisualHighlightMark";

export function PageContactComposer() {
  return (
    <SharedSectionShell className="min-h-screen">
      <div className="rounded-[2.5rem] bg-cream-white p-10 text-body-text shadow-md sm:p-14">
        <SharedEditorialPanel
          eyebrow={contactContent.eyebrow}
          title={contactContent.title}
        >
          <p className="max-w-xl text-body-text">{contactContent.intro}</p>

          <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-3 text-sm text-body-text sm:grid-cols-2">
            {contactContent.inquiryTypes.map((type) => (
              <li key={type} className="border-b border-divider-line pb-3">
                {type}
              </li>
            ))}
          </ul>

          <a
            href={officialLinks.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-block text-title-primary transition-opacity duration-300 hover:opacity-70"
          >
            <VisualHighlightMark>{contactContent.instagramCta}</VisualHighlightMark>
          </a>
        </SharedEditorialPanel>
      </div>
    </SharedSectionShell>
  );
}
