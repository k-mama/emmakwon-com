import Link from "next/link";

export function HomeMaisonHero({
  eyebrow,
  hook,
  href,
}: {
  eyebrow: string;
  hook: string;
  href: string;
}) {
  return (
    <section className="relative flex items-center justify-center px-6 pt-16 pb-8 text-center sm:pt-20">
      <Link
        href={href}
        className="group mx-auto max-w-2xl motion-safe:animate-[quiet-reveal_1.2s_ease-out_both]"
      >
        <p className="text-[0.6rem] uppercase tracking-[0.3em] text-eyebrow-label sm:text-xs">
          {eyebrow}
        </p>
        <p className="mt-2 font-display text-xl tracking-tight text-title-primary transition-opacity duration-300 group-hover:opacity-70 sm:text-2xl">
          {hook}
        </p>
      </Link>
    </section>
  );
}
