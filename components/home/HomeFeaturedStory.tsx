"use client";

import { useRef, useState } from "react";
import Link from "next/link";

export function HomeFeaturedStory({
  eyebrow,
  question,
  caption,
  cta,
  href,
  src,
  poster,
}: {
  eyebrow: string;
  question: string;
  caption: string;
  cta: string;
  href: string;
  src: string;
  poster: string;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const play = () => {
    setIsPlaying(true);
    videoRef.current?.play();
  };

  return (
    <div className="mx-auto max-w-xl">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-title-primary">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-center font-display text-2xl text-title-primary sm:text-3xl">
        {question}
      </h2>
      <p className="mt-2 text-center text-sm text-body-text">{caption}</p>

      <div className="relative mt-8 aspect-square overflow-hidden rounded-[2rem] bg-obsidian shadow-xl">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          poster={poster}
          playsInline
          controls={isPlaying}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        />

        {!isPlaying ? (
          <button
            type="button"
            onClick={play}
            aria-label={cta}
            className="group absolute inset-0 flex items-center justify-center bg-obsidian/10 transition-colors duration-300 hover:bg-obsidian/20"
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
        ) : null}
      </div>

      <div className="mt-6 text-center">
        <Link
          href={href}
          className="text-sm font-semibold uppercase tracking-[0.25em] text-title-primary underline decoration-title-primary/40 underline-offset-4 transition-colors duration-300 hover:text-muted-bronze"
        >
          {cta}
        </Link>
      </div>
    </div>
  );
}
