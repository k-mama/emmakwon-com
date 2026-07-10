import officialLinks from "@/content/global.official-links.registry.json";
import { getContent, type KMamaContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n/locales";
import { SharedSectionShell } from "@/components/sections/SharedSectionShell";
import { SharedEditorialPanel } from "@/components/sections/SharedEditorialPanel";
import { KMamaSectionList } from "@/components/kmama/KMamaSectionList";

export function PageKMamaComposer({ locale }: { locale: Locale }) {
  const kMamaContent = getContent<KMamaContent>(locale, "page.k-mama");

  return (
    <SharedSectionShell className="min-h-screen">
      <div className="rounded-[2.5rem] bg-cream-white p-10 text-body-text shadow-md sm:p-14">
        <SharedEditorialPanel
          eyebrow={kMamaContent.eyebrow}
          title={kMamaContent.title}
        >
          <p className="max-w-xl text-body-text">{kMamaContent.intro}</p>
        </SharedEditorialPanel>

        <div className="mt-14">
          <KMamaSectionList
            sections={kMamaContent.sections}
            coloringBookLinks={officialLinks.kMamaColoringBook}
            channelLinks={{
              reelsWaveKids: officialLinks.reelsWaveKids.youtubeUrl,
              djHamahama: officialLinks.djHamahama.youtubeUrl,
            }}
          />
        </div>
      </div>
    </SharedSectionShell>
  );
}
