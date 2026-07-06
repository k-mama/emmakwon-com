export function VisualSoftRoomField({
  colors,
  deep = false,
}: {
  colors: [string, string, string, string];
  deep?: boolean;
}) {
  const mix = deep ? 34 : 52;
  const bandMix = deep ? 24 : 38;
  const [a, b, c, d] = colors;

  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10"
      style={{
        background: `
          radial-gradient(ellipse 65% 55% at 12% 16%, color-mix(in srgb, ${a} ${mix}%, white) 0%, transparent 62%),
          radial-gradient(ellipse 60% 50% at 88% 10%, color-mix(in srgb, ${b} ${mix}%, white) 0%, transparent 62%),
          linear-gradient(125deg, transparent 28%, color-mix(in srgb, ${c} ${bandMix}%, white) 48%, transparent 68%),
          radial-gradient(ellipse 60% 55% at 18% 90%, color-mix(in srgb, ${d} ${mix}%, white) 0%, transparent 62%),
          var(--color-cream-white)
        `,
      }}
    />
  );
}
