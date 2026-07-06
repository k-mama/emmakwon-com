const TILE_CLASSES = [
  "bg-playful-violet text-cream-white",
  "bg-sky-aqua text-soft-ink",
  "bg-clear-blue text-cream-white",
  "bg-soft-blush text-soft-ink",
];

export function VisualIridescentPanel({
  title,
  note,
  placeholderLabel,
  accentIndex = 0,
}: {
  title: string;
  note?: string;
  placeholderLabel: string;
  accentIndex?: number;
}) {
  const tileClasses = TILE_CLASSES[accentIndex % TILE_CLASSES.length];

  return (
    <div
      className={`flex aspect-[4/5] flex-col justify-end rounded-3xl p-6 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg ${tileClasses}`}
    >
      <span className="text-[0.65rem] uppercase tracking-[0.2em] opacity-70">
        {placeholderLabel}
      </span>
      <h3 className="mt-3 font-display text-xl">{title}</h3>
      {note ? <p className="mt-1 text-sm opacity-80">{note}</p> : null}
    </div>
  );
}
