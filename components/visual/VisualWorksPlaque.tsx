import { VisualCategoryGlyph } from "@/components/visual/VisualCategoryGlyph";

const COMPLETE_TAGS = new Set([
  "Live Project",
  "Completed Work",
  "Published Work",
]);

export function VisualWorksPlaque({
  category,
  title,
  note,
  tag,
}: {
  category: string;
  title: string;
  note?: string;
  tag: string;
}) {
  const isComplete = COMPLETE_TAGS.has(tag);
  const monogram = title.trim().charAt(0).toUpperCase();

  return (
    <div className="group relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-3xl border border-champagne/25 bg-gradient-to-br from-obsidian to-soft-black p-7 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-tiger-gold/60 hover:shadow-lg">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-3 -top-6 select-none font-display text-[7rem] leading-none text-champagne/10"
      >
        {monogram}
      </span>

      <VisualCategoryGlyph
        category={category}
        className="relative h-7 w-7 text-champagne/70"
      />

      <div className="relative">
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] ${
            isComplete
              ? "border-tiger-gold/50 text-tiger-gold"
              : "border-champagne/30 border-dashed text-soft-smoke"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              isComplete ? "bg-tiger-gold" : "border border-champagne/50"
            }`}
          />
          {tag}
        </span>
        <h3 className="mt-4 font-display text-xl text-pearl-white">{title}</h3>
        {note ? (
          <p className="mt-1 text-sm text-champagne/70">{note}</p>
        ) : null}
      </div>
    </div>
  );
}
