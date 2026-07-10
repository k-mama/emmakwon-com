export function VisualGlobeIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="globeOcean" x1="5" y1="4" x2="26" y2="27" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8fe0f4" />
          <stop offset="100%" stopColor="#1f8fd6" />
        </linearGradient>
      </defs>
      <circle cx="15" cy="16" r="12" fill="url(#globeOcean)" />
      <path
        d="M7.5 11c1.8-2 3.8-1.2 4.8-0.2s2.6 0.4 3.6-0.6 3-0.2 2.2 1.8-2.8 1.8-2 3.6 2.8 0.8 2 2.8-3.6 1.8-5.6 0.8-1.8-2.6-3.6-1.6-3.6 0.2-3.6-2.6 0.8-2.8 2.2-4z"
        fill="#3f9d63"
        opacity="0.92"
      />
      <path d="M19 18.5c1 0.8 2.6 0.8 2.6 2.6s-1.8 2.6-2.6 1.8-0.8-2.6 0-4.4z" fill="#3f9d63" opacity="0.92" />
      <ellipse cx="11" cy="10" rx="4.5" ry="2.2" fill="#ffffff" opacity="0.28" />
      <path
        d="M25 21.5c0 3.2-3.6 6.2-3.6 6.2s-3.6-3-3.6-6.2a3.6 3.6 0 1 1 7.2 0z"
        fill="#f4574f"
        stroke="#ffffff"
        strokeWidth="0.9"
      />
      <circle cx="21.4" cy="21.3" r="1.4" fill="#ffffff" />
    </svg>
  );
}
