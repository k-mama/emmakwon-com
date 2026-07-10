export function VisualGlobeIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="globeLineGrad" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f0a1c0" />
          <stop offset="35%" stopColor="#b15fd1" />
          <stop offset="70%" stopColor="#8fdae0" />
          <stop offset="100%" stopColor="#f0b960" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#globeLineGrad)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8.5" />
        <ellipse cx="12" cy="12" rx="4" ry="8.5" />
        <line x1="3.5" y1="12" x2="20.5" y2="12" />
        <path d="M5 8 Q12 10 19 8" />
        <path d="M5 16 Q12 14 19 16" />
      </g>
    </svg>
  );
}
