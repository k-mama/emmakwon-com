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
      <div className="relative overflow-hidden rounded-[2rem] border border-champagne/25 bg-obsidian shadow-md">
        <video
          // Shows the clip at its own native aspect ratio instead of
          // cropping it into a fixed box.
          className="block h-auto w-full"
          // Previous treatment forced every source into a 16:9 landscape
          // crop. Kept here in case a widescreen cut is used later:
          // className="aspect-video w-full object-cover"
          src={src}
          muted
          autoPlay
          loop
          playsInline
          controls
        />

        <div className="pointer-events-none absolute inset-x-0 top-0 bg-gradient-to-b from-obsidian/85 via-obsidian/25 to-transparent p-5 sm:p-7">
          <p className="text-[0.6rem] uppercase tracking-[0.3em] text-champagne/80">
            {eyebrow}
          </p>
          <h2 className="mt-2 font-display text-lg text-pearl-white sm:text-xl">
            {title}
          </h2>
          <p className="mt-1 max-w-xs text-xs text-champagne/70 sm:text-sm">
            {subtitle}
          </p>
        </div>
      </div>

      <p className="mt-4 text-center text-xs text-soft-text">{note}</p>

      <VisualChampagneLine className="mt-12" />
    </div>
  );
}
