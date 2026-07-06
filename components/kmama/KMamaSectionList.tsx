import { VisualChampagneLine } from "@/components/visual/VisualChampagneLine";

type KMamaEdition = { label: string; linkKey: string };

type KMamaSection = {
  key: string;
  label: string;
  description: string;
  editions?: KMamaEdition[];
};

type ColoringBookRegistry = Record<string, { url: string }>;

export function KMamaSectionList({
  sections,
  coloringBookLinks,
}: {
  sections: KMamaSection[];
  coloringBookLinks: ColoringBookRegistry;
}) {
  return (
    <div className="flex flex-col">
      {sections.map((section, index) => (
        <div key={section.key}>
          {index > 0 ? <VisualChampagneLine className="my-10" /> : null}
          <h2 className="font-display text-2xl text-title-primary">
            {section.label}
          </h2>
          <p className="mt-2 max-w-lg text-body-text">
            {section.description}
          </p>
          {section.editions ? (
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {section.editions.map((edition) => {
                const entry = coloringBookLinks[edition.linkKey];
                if (!entry) return null;

                return (
                  <li key={edition.label}>
                    <a
                      href={entry.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-title-primary underline decoration-divider-line underline-offset-4 transition-colors duration-300 hover:text-header-hover"
                    >
                      {edition.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      ))}
    </div>
  );
}
