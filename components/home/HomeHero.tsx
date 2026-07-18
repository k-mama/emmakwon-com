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
    <section className="relative overflow-hidden bg-warm-ivory">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-16 h-64 w-64 rounded-full bg-candy-pink opacity-20 blur-3xl sm:h-80 sm:w-80"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-8 h-56 w-56 rounded-full bg-sky-aqua opacity-20 blur-3xl sm:h-72 sm:w-72"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-tiger-gold opacity-15 blur-3xl sm:h-72 sm:w-72"
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 pt-20 pb-14 text-center sm:flex-row sm:gap-14 sm:px-10 sm:pt-24 sm:pb-20 sm:text-left">
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

        <div className="motion-safe:animate-[quiet-reveal_1.2s_ease-out_both]">
          <p className="text-xs uppercase tracking-[0.35em] text-eyebrow-label">
            {name}
          </p>
          <h1 className="mt-4 text-balance font-display text-3xl leading-tight text-title-primary sm:text-5xl">
            {line}
          </h1>
          <p className="mt-5 max-w-md text-balance text-base leading-relaxed text-body-text sm:text-lg">
            {subline}
          </p>
        </div>
      </div>

      <div className="relative flex justify-center pb-8 sm:pb-10">
        <span className="text-xs uppercase tracking-[0.3em] text-soft-text motion-safe:animate-[quiet-reveal_1.6s_ease-out_both]">
          {cue}
        </span>
      </div>
    </section>
  );
}
