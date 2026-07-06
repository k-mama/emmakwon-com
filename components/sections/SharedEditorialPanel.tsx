import type { ReactNode } from "react";
import { VisualChampagneLine } from "@/components/visual/VisualChampagneLine";

export function SharedEditorialPanel({
  eyebrow,
  title,
  children,
  className = "",
  eyebrowClassName = "text-eyebrow-label",
  titleClassName = "text-title-primary",
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
}) {
  return (
    <div className={className}>
      {eyebrow ? (
        <p
          className={`mb-4 text-xs uppercase tracking-[0.25em] ${eyebrowClassName}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h1 className={`font-display text-4xl leading-tight sm:text-5xl ${titleClassName}`}>
        {title}
      </h1>
      <VisualChampagneLine className="my-8 max-w-xs" />
      {children}
    </div>
  );
}
