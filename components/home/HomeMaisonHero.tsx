// import { VisualSoftRoomField } from "@/components/visual/VisualSoftRoomField";

export function HomeMaisonHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 text-center">
      {/* Soft room field background — reverted to flat cream-white per request, colors kept here for later use
      <VisualSoftRoomField
        colors={[
          "var(--color-sunny-orange)",
          "var(--color-candy-pink)",
          "var(--color-sky-aqua)",
          "var(--color-playful-magenta)",
        ]}
      />
      */}
      <div className="relative rounded-[2.5rem] bg-cream-white/90 px-10 py-14 shadow-xl backdrop-blur motion-safe:animate-[quiet-reveal_1.2s_ease-out_both] sm:px-16 sm:py-20">
        <h1 className="font-display text-5xl tracking-tight text-title-primary sm:text-7xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-md text-sm tracking-wide text-body-text sm:text-base motion-safe:animate-[quiet-reveal_1.2s_ease-out_0.3s_both]">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
