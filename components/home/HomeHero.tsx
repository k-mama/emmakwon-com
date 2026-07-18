import Image from "next/image";

export function HomeHero({
  name,
  line,
  subline,
  cue,
  portraitSrc,
  portraitAlt,
}: {
  name: string;
  line: string;
  subline: string;
  cue: string;
  portraitSrc: string;
  portraitAlt: string;
}) {
  return (
    <section className="relative">
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 pt-16 pb-14 text-center sm:flex-row sm:gap-14 sm:px-10 sm:pt-20 sm:pb-20 sm:text-left">
        <div className="relative aspect-[4/5] w-48 shrink-0 overflow-hidden rounded-[2rem] shadow-xl sm:w-64 motion-safe:animate-[quiet-reveal_1.2s_ease-out_both]">
          <Image
            src={portraitSrc}
            alt={portraitAlt}
            fill
            priority
            sizes="(min-width: 640px) 256px, 192px"
            className="object-cover"
          />
        </div>

        <div className="rounded-[2rem] bg-cream-white/90 px-8 py-10 shadow-md motion-safe:animate-[quiet-reveal_1.2s_ease-out_both] sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-bronze">
            {name}
          </p>
          <h1 className="mt-4 text-balance font-display text-3xl leading-tight text-title-primary sm:text-5xl">
            {line}
          </h1>
          <p className="mt-5 max-w-md text-balance text-base leading-relaxed text-body-text sm:text-lg">
            {subline}
          </p>
          <p className="mt-8 text-xs uppercase tracking-[0.3em] text-soft-text">
            {cue}
          </p>
        </div>
      </div>
    </section>
  );
}
