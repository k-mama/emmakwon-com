import { VisualWorksPlaque } from "@/components/visual/VisualWorksPlaque";

type WorksCategory = {
  key: string;
  label: string;
  items: { title: string; note?: string; tag: string }[];
};

export function WorksGalleryGrid({
  categories,
}: {
  categories: WorksCategory[];
}) {
  return (
    <div className="flex flex-col gap-16">
      {categories.map((category) => (
        <div key={category.key}>
          <h2 className="mb-6 text-xs uppercase tracking-[0.25em] text-soft-text">
            {category.label}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {category.items.map((item) => (
              <VisualWorksPlaque
                key={item.title}
                category={category.key}
                title={item.title}
                note={item.note}
                tag={item.tag}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
