import homeContent from "@/content/page.home.en.json";
import officialLinks from "@/content/global.official-links.registry.json";
import { HomeMaisonHero } from "@/components/home/HomeMaisonHero";
import { HomeNoticeVideo } from "@/components/home/HomeNoticeVideo";
import { HomeIdentityPortrait } from "@/components/home/HomeIdentityPortrait";
import { HomeRoomEntranceGrid } from "@/components/home/HomeRoomEntranceGrid";
import { HomeProofStrip } from "@/components/home/HomeProofStrip";
import { HomeInstagramWindow } from "@/components/home/HomeInstagramWindow";
import { SharedSectionShell } from "@/components/sections/SharedSectionShell";

export function PageHomeComposer() {
  return (
    <>
      <HomeMaisonHero
        title={homeContent.hero.title}
        subtitle={homeContent.hero.subtitle}
        roles={homeContent.hero.roles}
      />

      <SharedSectionShell>
        <HomeNoticeVideo
          src={homeContent.noticeVideo.src}
          eyebrow={homeContent.noticeVideo.eyebrow}
        />
      </SharedSectionShell>

      <SharedSectionShell>
        <HomeIdentityPortrait
          src={homeContent.portrait.src}
          alt={homeContent.portrait.alt}
          statement={homeContent.houseStatement}
        />
      </SharedSectionShell>

      <SharedSectionShell>
        <HomeRoomEntranceGrid roomEntrances={homeContent.roomEntrances} />
      </SharedSectionShell>

      <SharedSectionShell className="py-16">
        <div className="mx-auto w-fit rounded-full bg-cream-white/90 px-8 py-4 shadow-md">
          <HomeProofStrip items={homeContent.proofStrip} />
        </div>
      </SharedSectionShell>

      <SharedSectionShell className="py-0 pb-24">
        <HomeInstagramWindow
          label={homeContent.instagramWindow.label}
          description={homeContent.instagramWindow.description}
          handle={officialLinks.instagram.handle}
          url={officialLinks.instagram.url}
        />
      </SharedSectionShell>
    </>
  );
}
