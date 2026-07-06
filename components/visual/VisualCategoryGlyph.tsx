const GLYPH_PATHS: Record<string, string> = {
  websites:
    "M3 5.5A1.5 1.5 0 0 1 4.5 4h15A1.5 1.5 0 0 1 21 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5v-13Z M3 8.5h18 M6 6.5h.01 M8.5 6.5h.01",
  "cosmetic-packaging":
    "M10 3h4 M10 3v2.2c0 .4-.15.78-.44 1.06L8.4 7.4A1.5 1.5 0 0 0 8 8.46V20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V8.46a1.5 1.5 0 0 0-.4-1.06l-1.16-1.14A1.5 1.5 0 0 1 14 5.2V3 M8 12h8",
  "cosmetic-containers":
    "M6.5 8.5h11a1 1 0 0 1 1 1V19a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2V9.5a1 1 0 0 1 1-1Z M8 8.5V6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2.5",
  "bag-design":
    "M4.5 8.5h15l-1.1 11.2a1.5 1.5 0 0 1-1.49 1.3H7.09a1.5 1.5 0 0 1-1.49-1.3L4.5 8.5Z M8.5 8.5V6.5a3.5 3.5 0 0 1 7 0v2",
  "publishing-projects":
    "M12 6.2c-1.4-1-3.6-1.4-5.5-1.2C5.5 5.1 4.5 5.4 4.5 6.3v11.6c0 .7.7 1.1 1.4 1 1.6-.2 3.6.1 4.9 1 .8.5 1.4.5 2.2 0 1.3-.9 3.3-1.2 4.9-1 .7.1 1.4-.3 1.4-1V6.3c0-.9-1-1.2-2-1.3-1.9-.2-4.1.2-5.5 1.2Z M12 6.2V19",
  "brand-objects":
    "M12 2.5 14.7 8l6 .9-4.35 4.15L17.4 19 12 16.1 6.6 19l1.05-5.95L3.3 8.9l6-.9L12 2.5Z",
};

export function VisualCategoryGlyph({
  category,
  className = "",
}: {
  category: string;
  className?: string;
}) {
  const path = GLYPH_PATHS[category];
  if (!path) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.15}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}
