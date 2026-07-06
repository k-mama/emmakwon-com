import Image from "next/image";
import bornRareContent from "@/content/page.born-rare.en.json";
import officialLinks from "@/content/global.official-links.registry.json";
import { SharedSectionShell } from "@/components/sections/SharedSectionShell";
import { SharedEditorialPanel } from "@/components/sections/SharedEditorialPanel";
import { VisualHighlightMark } from "@/components/visual/VisualHighlightMark";
// import { VisualSoftRoomField } from "@/components/visual/VisualSoftRoomField";

const EDITION_URLS: Record<string, string | null> = {
  kindleUrl: officialLinks.bornRare.kindleUrl,
  paperbackUrl: officialLinks.bornRare.paperbackUrl,
  hardcoverUrl: officialLinks.bornRare.hardcoverUrl,
};

export function PageBornRareComposer() {
  return (
    <SharedSectionShell className="min-h-screen">
      {/* Soft room field background — reverted to flat cream-white per request, colors kept here for later use
      <VisualSoftRoomField
        deep
        colors={[
          "var(--color-soft-blush)",
          "var(--color-playful-violet)",
          "var(--color-cream-white)",
          "var(--color-soft-ink)",
        ]}
      />
      */}
      <div className="rounded-[2.5rem] bg-cream-white p-10 text-body-text shadow-md sm:p-14">
        <div className="grid gap-10 sm:grid-cols-[minmax(0,220px)_1fr] sm:items-start">
          <div className="relative mx-auto aspect-[2/3] w-full max-w-[220px] overflow-hidden rounded-xl shadow-md">
            <Image
              src={bornRareContent.cover}
              alt={`${bornRareContent.title} book cover`}
              fill
              sizes="220px"
              className="object-cover"
              priority
            />
          </div>

          <SharedEditorialPanel
            eyebrow={bornRareContent.eyebrow}
            title={bornRareContent.title}
          >
            <p className="max-w-xl text-body-text">{bornRareContent.intro}</p>

            <h2 className="mt-12 text-xs uppercase tracking-[0.25em] text-eyebrow-label">
              {bornRareContent.editionsSectionTitle}
            </h2>

            <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-2">
              {bornRareContent.editions.map((edition) => {
                const url = EDITION_URLS[edition.linkKey];
                if (!url) return null;

                return (
                  <li key={edition.label}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-title-primary transition-opacity duration-300 hover:opacity-70"
                    >
                      <VisualHighlightMark>{edition.label}</VisualHighlightMark>
                    </a>
                  </li>
                );
              })}
            </ul>

            <p className="mt-10 max-w-lg text-sm text-soft-text">
              {bornRareContent.instagramNote}
            </p>
          </SharedEditorialPanel>
        </div>
      </div>
    </SharedSectionShell>
  );
}
