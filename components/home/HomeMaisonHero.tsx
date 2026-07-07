import Link from "next/link";

export function HomeMaisonHero({ hook, href }: { hook: string; href: string }) {
  return (
    <section className="relative flex items-center justify-center px-6 pt-16 pb-8 text-center sm:pt-20">
      <Link
        href={href}
        className="mx-auto max-w-2xl motion-safe:animate-[quiet-reveal_1.2s_ease-out_both]"
      >
        <p className="font-display text-xl tracking-tight text-soft-ink transition-opacity duration-300 hover:opacity-70 sm:text-2xl">
          {hook}
        </p>
      </Link>
    </section>
  );
}
