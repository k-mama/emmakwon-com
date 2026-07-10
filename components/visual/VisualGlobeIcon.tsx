export function VisualGlobeIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="globeLineGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#e97a0a" />
          <stop offset="25%" stopColor="#f38da1" />
          <stop offset="50%" stopColor="#b15fd1" />
          <stop offset="75%" stopColor="#8fdae0" />
          <stop offset="100%" stopColor="#d8c6a3" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#globeLineGrad)" strokeWidth="1.4" strokeLinecap="round">
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="3.4" ry="9" />
        <ellipse cx="12" cy="12" rx="6.8" ry="9" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <path d="M4.8 8.2 Q12 10.6 19.2 8.2" />
        <path d="M4.8 15.8 Q12 13.4 19.2 15.8" />
      </g>
    </svg>
  );
}
