// import { VisualSoftRoomField } from "@/components/visual/VisualSoftRoomField";

export function HomeMaisonHero({
  subtitle,
  roles,
}: {
  subtitle: string;
  roles?: string[];
}) {
  return (
    <section className="relative flex items-center justify-center px-6 pt-16 pb-8 text-center sm:pt-20">
      <div className="relative mx-auto w-fit max-w-lg rounded-full bg-cream-white/90 px-8 py-4 shadow-md backdrop-blur motion-safe:animate-[quiet-reveal_1.2s_ease-out_both]">
        {roles && roles.length > 0 ? (
          <p className="text-[0.6rem] uppercase tracking-[0.3em] text-eyebrow-label sm:text-xs">
            {roles.join(" · ")}
          </p>
        ) : null}
        <p className="mt-1 text-xs tracking-wide text-body-text sm:text-sm">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
