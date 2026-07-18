"use client";

import { useState } from "react";
import Link from "next/link";

export function HomeFeaturedStory({
  eyebrow,
  question,
  caption,
  cta,
  href,
  src,
}: {
  eyebrow: string;
  question: string;
  caption: string;
  cta: string;
  href: string;
  src: string;
}) {
  const [started, setStarted] = useState(false);

  return (
    <div className="mx-auto max-w-xl">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted-bronze">
        {eyebrow}
      </p>
      <h2
        className="mt-4 text-center text-3xl font-semibold text-obsidian sm:text-4xl"
        style={{ fontFamily: "var(--font-home-display)" }}
      >
        {question}
      </h2>
      <p className="mt-2 text-center text-sm text-body-text">{caption}</p>

      <div className="relative mt-8 aspect-square overflow-hidden rounded-[2rem] bg-soft-smoke shadow-xl">
        {started ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={src}
            preload="none"
            playsInline
            controls
            autoPlay
          />
        ) : (
          <button
            type="button"
            onClick={() => setStarted(true)}
            aria-label={cta}
            className="group absolute inset-0 flex items-center justify-center transition-colors duration-300 hover:bg-obsidian/10"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream-white/90 shadow-lg transition-transform duration-300 group-hover:scale-105">
              <svg
                viewBox="0 0 24 24"
                className="ml-1 h-6 w-6 text-obsidian"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>

      <div className="mt-6 text-center">
        <Link
          href={href}
          className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-bronze underline decoration-muted-bronze/40 underline-offset-4 transition-colors duration-300 hover:text-tiger-gold"
        >
          {cta}
        </Link>
      </div>
    </div>
  );
}
