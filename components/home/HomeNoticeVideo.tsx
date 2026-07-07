"use client";

import { useRef } from "react";

export function HomeNoticeVideo({
  src,
  eyebrow,
}: {
  src: string;
  eyebrow?: string;
}) {
  const durationRef = useRef<number | null>(null);

  const stopAtLastFrame = (video: HTMLVideoElement) => {
    const duration = durationRef.current;
    if (duration === null) return;
    const stopPoint = Math.max(duration - 1, 0);
    video.pause();
    video.currentTime = stopPoint;
  };

  return (
    <div className="mx-auto max-w-5xl">
      {eyebrow ? (
        <p className="mb-4 text-center text-xs uppercase tracking-[0.25em] text-eyebrow-label">
          {eyebrow}
        </p>
      ) : null}
      <div className="overflow-hidden rounded-[2.5rem] shadow-xl">
        <video
          className="aspect-video w-full bg-obsidian object-cover"
          src={src}
          muted
          autoPlay
          playsInline
          controls
          onLoadedMetadata={(event) => {
            durationRef.current = event.currentTarget.duration;
          }}
          onTimeUpdate={(event) => {
            const video = event.currentTarget;
            const duration = durationRef.current;
            if (duration === null) return;
            if (video.currentTime >= duration - 1) {
              stopAtLastFrame(video);
            }
          }}
          onEnded={(event) => {
            stopAtLastFrame(event.currentTarget);
          }}
        />
      </div>
    </div>
  );
}
