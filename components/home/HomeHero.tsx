export function HomeHero({
  name,
  line,
  subline,
  cue,
}: {
  name: string;
  line: string;
  subline: string;
  cue: string;
}) {
  return (
    <section className="relative">
      <div className="relative mx-auto flex max-w-2xl justify-center px-6 pt-16 pb-14 text-center sm:pt-20 sm:pb-20">
        <div className="rounded-[2rem] bg-cream-white/90 px-8 py-10 shadow-md motion-safe:animate-[quiet-reveal_1.2s_ease-out_both] sm:px-14 sm:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-bronze">
            {name}
          </p>
          <h1
            className="mt-4 text-balance text-4xl font-semibold leading-tight text-obsidian sm:text-6xl"
            style={{ fontFamily: "var(--font-home-display)" }}
          >
            {line}
          </h1>
          <p className="mx-auto mt-5 max-w-md text-balance text-base leading-relaxed text-body-text sm:text-lg">
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
