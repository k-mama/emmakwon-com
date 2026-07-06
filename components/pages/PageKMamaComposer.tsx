import kMamaContent from "@/content/page.k-mama.en.json";
import officialLinks from "@/content/global.official-links.registry.json";
import { SharedSectionShell } from "@/components/sections/SharedSectionShell";
import { SharedEditorialPanel } from "@/components/sections/SharedEditorialPanel";
import { KMamaSectionList } from "@/components/kmama/KMamaSectionList";
// import { VisualSoftRoomField } from "@/components/visual/VisualSoftRoomField";

export function PageKMamaComposer() {
  return (
    <SharedSectionShell className="min-h-screen">
      {/* Soft room field background — reverted to flat cream-white per request, colors kept here for later use
      <VisualSoftRoomField
        colors={[
          "var(--color-sunny-orange)",
          "var(--color-candy-pink)",
          "var(--color-sky-aqua)",
          "var(--color-playful-magenta)",
        ]}
      />
      */}
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
