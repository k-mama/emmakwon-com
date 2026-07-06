import emmaestroContent from "@/content/page.emmaestro.en.json";
import officialLinks from "@/content/global.official-links.registry.json";
import { SharedSectionShell } from "@/components/sections/SharedSectionShell";
import { SharedEditorialPanel } from "@/components/sections/SharedEditorialPanel";
// import { VisualSoftRoomField } from "@/components/visual/VisualSoftRoomField";

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
          <p className="max-w-xl text-body-text">{emmaestroContent.intro}</p>

          <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
            {emmaestroContent.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs uppercase tracking-[0.2em] text-soft-text">
                  {stat.label}
                </dt>
                <dd className="font-display text-3xl text-title-primary">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-16 text-xs uppercase tracking-[0.25em] text-eyebrow-label">
            {emmaestroContent.streamingSectionTitle}
          </h2>

          <div className="mt-6 grid gap-10 sm:grid-cols-2">
            <div>
              <p className="text-sm text-soft-text">
                {emmaestroContent.spotifyLabel}
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {officialLinks.emmaestro.spotifyAlbums.map((url, index) => (
                  <li key={url}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-title-primary underline decoration-divider-line underline-offset-4 transition-colors duration-300 hover:text-header-hover"
                    >
                      Album {index + 1}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm text-soft-text">
                {emmaestroContent.appleMusicLabel}
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {officialLinks.emmaestro.appleMusicAlbums.map(
                  (url, index) => (
                    <li key={url}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-title-primary underline decoration-divider-line underline-offset-4 transition-colors duration-300 hover:text-header-hover"
                      >
                        Album {index + 1}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </SharedEditorialPanel>
      </div>
    </SharedSectionShell>
  );
}
