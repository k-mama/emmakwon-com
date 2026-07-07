import Image from "next/image";
import emmaestroContent from "@/content/page.emmaestro.en.json";
import officialLinks from "@/content/global.official-links.registry.json";
import { SharedSectionShell } from "@/components/sections/SharedSectionShell";
import { SharedEditorialPanel } from "@/components/sections/SharedEditorialPanel";
import { VisualHighlightMark } from "@/components/visual/VisualHighlightMark";
// import { VisualSoftRoomField } from "@/components/visual/VisualSoftRoomField";

type AlbumLinks = { spotifyUrl: string; appleMusicUrl: string | null };

const ALBUM_LINKS: Record<string, AlbumLinks> = officialLinks.emmaestro.albums;

export function PageEmmaestroComposer() {
  return (
    <SharedSectionShell className="min-h-screen">
      {/* Soft room field background — reverted to flat cream-white per request, colors kept here for later use
      <VisualSoftRoomField
        colors={[
          "var(--color-ice-cream-lavender)",
          "var(--color-clear-blue)",
          "var(--color-soft-periwinkle)",
          "var(--color-mint-light)",
        ]}
      />
      */}
      <div className="rounded-[2.5rem] bg-cream-white p-10 text-body-text shadow-md sm:p-14">
        <SharedEditorialPanel
          eyebrow={emmaestroContent.eyebrow}
          title={emmaestroContent.title}
        >
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
            <div className="relative aspect-[4/5] w-40 shrink-0 overflow-hidden rounded-2xl shadow-md sm:w-48">
              <Image
                src={emmaestroContent.candidPhoto.src}
                alt={emmaestroContent.candidPhoto.alt}
                fill
                sizes="(min-width: 640px) 192px, 160px"
                className="object-cover"
              />
            </div>

            <div>
              <p className="max-w-xl text-body-text">{emmaestroContent.intro}</p>

              <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
                {emmaestroContent.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-xs uppercase tracking-[0.2em] text-soft-text">
                      {stat.label}
                    </dt>
                    <dd className="font-sans text-3xl font-semibold text-title-primary">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <h2 className="mt-16 text-xs uppercase tracking-[0.25em] text-eyebrow-label">
            {emmaestroContent.streamingSectionTitle}
          </h2>

          <div className="mt-6 grid gap-8 sm:grid-cols-3">
            {emmaestroContent.albums.map((album) => {
              const links = ALBUM_LINKS[album.linkKey];

              return (
                <div key={album.title}>
                  <div className="relative aspect-square overflow-hidden rounded-2xl shadow-md">
                    <Image
                      src={album.cover}
                      alt={`${album.title} album cover`}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-lg text-title-primary">
                    {album.title}
                  </h3>
                  <div className="mt-1 flex gap-4 text-sm">
                    <a
                      href={links.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-title-primary transition-opacity duration-300 hover:opacity-70"
                    >
                      <VisualHighlightMark>
                        {emmaestroContent.spotifyLabel}
                      </VisualHighlightMark>
                    </a>
                    {links.appleMusicUrl ? (
                      <a
                        href={links.appleMusicUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-title-primary transition-opacity duration-300 hover:opacity-70"
                      >
                        <VisualHighlightMark>
                          {emmaestroContent.appleMusicLabel}
                        </VisualHighlightMark>
                      </a>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </SharedEditorialPanel>
      </div>
    </SharedSectionShell>
  );
}
