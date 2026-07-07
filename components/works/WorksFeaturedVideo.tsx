import { VisualChampagneLine } from "@/components/visual/VisualChampagneLine";

export function WorksFeaturedVideo({
  src,
  eyebrow,
  title,
  subtitle,
  note,
}: {
  src: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  note: string;
}) {
  return (
    <div className="mx-auto max-w-2xl">
      <p className="mb-4 text-center text-xs uppercase tracking-[0.25em] text-eyebrow-label">
        {eyebrow}
      </p>

      <div className="overflow-hidden rounded-[2rem] border border-champagne/25 bg-obsidian shadow-md">
        <video
          className="aspect-video w-full object-cover"
          src={src}
          muted
          autoPlay
          loop
          playsInline
          controls
        />
      </div>

      <h2 className="mt-6 text-center font-display text-2xl text-title-primary">
        {title}
      </h2>
      <p className="mt-2 text-center text-sm text-body-text">{subtitle}</p>
      <p className="mt-3 text-center text-xs text-soft-text">{note}</p>

      <VisualChampagneLine className="mt-12" />
    </div>
  );
}
