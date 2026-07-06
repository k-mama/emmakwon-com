export function VisualChampagneLine({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`h-px w-full bg-gradient-to-r from-transparent via-divider-line to-transparent ${className}`}
    />
  );
}
