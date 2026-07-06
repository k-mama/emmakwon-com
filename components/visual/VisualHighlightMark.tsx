import type { ReactNode } from "react";

export function VisualHighlightMark({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`relative inline-block px-1 ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(180deg, transparent 58%, var(--color-blush-highlight) 58%, var(--color-blush-highlight) 88%, transparent 88%)",
      }}
    >
      {children}
    </span>
  );
}
