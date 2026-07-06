import type { ReactNode } from "react";

const SURFACE_CLASSES = {
  transparent: "bg-transparent text-obsidian",
  white: "bg-cream-white text-obsidian",
} as const;

export function SharedSectionShell({
  id,
  surface = "transparent",
  className = "",
  children,
}: {
  id?: string;
  surface?: keyof typeof SURFACE_CLASSES;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative ${SURFACE_CLASSES[surface]} ${className}`}
    >
      <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10">{children}</div>
    </section>
  );
}
