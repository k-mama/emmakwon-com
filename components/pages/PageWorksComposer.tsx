import worksContent from "@/content/page.works.en.json";
import { SharedSectionShell } from "@/components/sections/SharedSectionShell";
import { SharedEditorialPanel } from "@/components/sections/SharedEditorialPanel";
import { WorksFeaturedVideo } from "@/components/works/WorksFeaturedVideo";
import { WorksGalleryGrid } from "@/components/works/WorksGalleryGrid";
// import { VisualSoftRoomField } from "@/components/visual/VisualSoftRoomField";

export function PageWorksComposer() {
  return (
    <SharedSectionShell className="min-h-screen">
      {/* Soft room field background — reverted to flat cream-white per request, colors kept here for later use
      <VisualSoftRoomField
        colors={[
          "var(--color-playful-violet)",
          "var(--color-sky-aqua)",
          "var(--color-clear-blue)",
          "var(--color-soft-blush)",
        ]}
      />
      */}
      <div className="rounded-[2.5rem] bg-cream-white p-10 text-body-text shadow-md sm:p-14">
        <SharedEditorialPanel
          eyebrow={worksContent.eyebrow}
          title={worksContent.title}
        >
          <p className="max-w-xl text-body-text">{worksContent.intro}</p>
        </SharedEditorialPanel>

        <div className="mt-14">
          <WorksFeaturedVideo
            src={worksContent.featuredVideo.src}
            eyebrow={worksContent.featuredVideo.eyebrow}
            title={worksContent.featuredVideo.title}
            subtitle={worksContent.featuredVideo.subtitle}
            note={worksContent.featuredVideo.note}
          />
        </div>

        <div className="mt-4">
          <WorksGalleryGrid categories={worksContent.categories} />
        </div>
      </div>
    </SharedSectionShell>
  );
}
