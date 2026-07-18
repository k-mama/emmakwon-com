import officialLinks from "@/content/global.official-links.registry.json";
import { getContent, type HomeContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n/locales";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeRoomIndex } from "@/components/home/HomeRoomIndex";
import { HomeFeaturedStory } from "@/components/home/HomeFeaturedStory";
import { HomeProofStrip } from "@/components/home/HomeProofStrip";
import { HomeInstagramWindow } from "@/components/home/HomeInstagramWindow";
import { HomeFinalDoor } from "@/components/home/HomeFinalDoor";
import { SharedSectionShell } from "@/components/sections/SharedSectionShell";

export function PageHomeComposer({ locale }: { locale: Locale }) {
  const homeContent = getContent<HomeContent>(locale, "page.home");

  return (
    <>
      <HomeHero
        name={homeContent.hero.name}
        line={homeContent.hero.line}
        subline={homeContent.hero.subline}
        cue={homeContent.hero.cue}
        portraitSrc={homeContent.portrait.src}
        portraitAlt={homeContent.portrait.alt}
      />

      <SharedSectionShell>
        <HomeRoomIndex
          label={homeContent.roomIndexLabel}
          roomEntrances={homeContent.roomEntrances.map((room) => ({
            ...room,
            href: `/${locale}${room.href}`,
          }))}
        />
      </SharedSectionShell>

      <SharedSectionShell className="py-0 pb-16 sm:pb-20">
        <HomeFeaturedStory
          eyebrow={homeContent.featuredStory.eyebrow}
          question={homeContent.featuredStory.question}
          caption={homeContent.featuredStory.caption}
          cta={homeContent.featuredStory.cta}
          href={`/${locale}${homeContent.featuredStory.href}`}
          src={homeContent.featuredStory.src}
        />
      </SharedSectionShell>

      <SharedSectionShell className="py-0 pb-24">
        <HomeInstagramWindow
          label={homeContent.instagramWindow.label}
          description={homeContent.instagramWindow.description}
          handle={officialLinks.instagram.handle}
          url={officialLinks.instagram.url}
        />
      </SharedSectionShell>

      <SharedSectionShell className="py-16">
        <div className="mx-auto w-fit rounded-full bg-cream-white/90 px-8 py-4 shadow-md">
          <HomeProofStrip items={homeContent.proofStrip} />
        </div>
      </SharedSectionShell>

      <SharedSectionShell className="pt-0 pb-24">
        <HomeFinalDoor
          question={homeContent.finalDoor.question}
          choices={homeContent.finalDoor.choices.map((choice) => ({
            ...choice,
            href: `/${locale}${choice.href}`,
          }))}
        />
      </SharedSectionShell>
    </>
  );
}
