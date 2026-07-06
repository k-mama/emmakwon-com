type RareLightVariant = "hero" | "born-rare" | "emmaestro" | "works" | "k-mama";

const VARIANT_GRADIENTS: Record<RareLightVariant, string> = {
  hero: "radial-gradient(ellipse 60% 45% at 50% 20%, color-mix(in srgb, var(--color-rare-orange) 18%, transparent), transparent 70%), radial-gradient(ellipse 45% 35% at 80% 75%, color-mix(in srgb, var(--color-champagne) 14%, transparent), transparent 70%)",
  "born-rare": "radial-gradient(ellipse 55% 45% at 20% 15%, color-mix(in srgb, var(--color-rare-orange) 26%, transparent), transparent 70%), radial-gradient(ellipse 50% 40% at 85% 80%, color-mix(in srgb, var(--color-liquid-gold) 20%, transparent), transparent 70%)",
  emmaestro: "radial-gradient(ellipse 50% 40% at 75% 20%, color-mix(in srgb, var(--color-mint-light) 18%, transparent), transparent 70%), radial-gradient(ellipse 45% 40% at 15% 80%, color-mix(in srgb, var(--color-soft-aqua) 16%, transparent), transparent 70%)",
  works: "radial-gradient(ellipse 50% 45% at 30% 25%, color-mix(in srgb, var(--color-soft-smoke) 16%, transparent), transparent 70%), radial-gradient(ellipse 40% 35% at 80% 70%, color-mix(in srgb, var(--color-sage-glass) 12%, transparent), transparent 70%)",
  "k-mama": "radial-gradient(ellipse 55% 45% at 25% 20%, color-mix(in srgb, var(--color-peach-flame) 20%, transparent), transparent 70%), radial-gradient(ellipse 45% 40% at 80% 75%, color-mix(in srgb, var(--color-pearl-pink) 18%, transparent), transparent 70%)",
};

export function VisualRareLightAtmosphere({
  variant,
  className = "",
}: {
  variant: RareLightVariant;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden motion-safe:animate-[rare-light-drift_18s_ease-in-out_infinite] ${className}`}
      style={{ background: VARIANT_GRADIENTS[variant] }}
    />
  );
}
