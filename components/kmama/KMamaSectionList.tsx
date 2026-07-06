import Image from "next/image";
import { VisualChampagneLine } from "@/components/visual/VisualChampagneLine";
import { VisualHighlightMark } from "@/components/visual/VisualHighlightMark";

type KMamaEdition = { label: string; linkKey: string; cover?: string };

type KMamaSection = {
  key: string;
  label: string;
  description: string;
  editions?: KMamaEdition[];
  logo?: string;
  youtubeCta?: string;
  youtubeLinkKey?: string;
};

type ColoringBookRegistry = Record<string, { url: string }>;

export function KMamaSectionList({
  sections,
  coloringBookLinks,
  channelLinks,
}: {
  sections: KMamaSection[];
  coloringBookLinks: ColoringBookRegistry;
  channelLinks: Record<string, string>;
}) {
  return (
    <div className="flex flex-col">
      {sections.map((section, index) => (
        <div key={section.key}>
          {index > 0 ? <VisualChampagneLine className="my-10" /> : null}

          {section.logo ? (
            <div className="mb-4 h-16 w-16 overflow-hidden rounded-full shadow-md">
              <Image
                src={section.logo}
                alt={`${section.label} channel logo`}
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
          ) : null}

          <h2 className="font-display text-2xl text-title-primary">
            {section.label}
          </h2>
          <p className="mt-2 max-w-lg text-body-text">
            {section.description}
          </p>

          {section.editions ? (
            <ul className="mt-4 flex flex-wrap gap-6">
              {section.editions.map((edition) => {
                const entry = coloringBookLinks[edition.linkKey];
                if (!entry) return null;

                return (
                  <li key={edition.label} className="w-28">
                    <a href={entry.url} target="_blank" rel="noopener noreferrer">
                      {edition.cover ? (
                        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-md">
                          <Image
                            src={edition.cover}
                            alt={`${edition.label} edition cover`}
                            fill
                            sizes="112px"
                            className="object-cover"
                          />
                        </div>
                      ) : null}
                      <span className="mt-2 block text-center text-sm text-title-primary transition-opacity duration-300 hover:opacity-70">
                        <VisualHighlightMark>{edition.label}</VisualHighlightMark>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          ) : null}

          {section.youtubeCta && section.youtubeLinkKey && channelLinks[section.youtubeLinkKey] ? (
            <a
              href={channelLinks[section.youtubeLinkKey]}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-title-primary transition-opacity duration-300 hover:opacity-70"
            >
              <VisualHighlightMark>{section.youtubeCta}</VisualHighlightMark>
            </a>
          ) : null}
        </div>
      ))}
    </div>
  );
}
