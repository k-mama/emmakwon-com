import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { generateLocaleStaticParams, type Locale } from "@/lib/i18n/locales";
import { SharedSectionShell } from "@/components/sections/SharedSectionShell";

const phrases = [
  {
    number: "001",
    title: "UNTAPPED POTENTIAL",
    line: "ADHD is not a lack of potential. It is untapped potential.",
    body:
      "A literary reflection on difficulty, curiosity, and the future a mind may not have had room to become.",
  },
  {
    number: "002",
    title: "CHRONIC ‘I’M FINE’ SYNDROME",
    line:
      "The habit of saying ‘I’m fine’ before the question has had time to reach your body.",
    body:
      "For the moments when the answer arrives before you have had time to notice what is true.",
  },
  {
    number: "003",
    title: "CHRONIC ‘I’LL DO IT’ SYNDROME",
    line:
      "The habit of taking responsibility before desire has had a chance to speak.",
    body:
      "For the quiet difference between chosen kindness and responsibility that arrives automatically.",
  },
] as const;

export function generateStaticParams() {
  return generateLocaleStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return buildPageMetadata({
    title: "The BORN RARE Lexicon",
    description:
      "Words for the life you lived before you had language for it. Begin with the phrase that recognizes you.",
    path: "/start",
    keywords: [
      "BORN RARE",
      "Emma Kwon",
      "ADHD memoir",
      "overfunctioning",
      "second beginnings",
      "literary memoir",
    ],
    locale,
  });
}

export default async function StartPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <>
      <SharedSectionShell className="overflow-hidden pb-6 pt-6 sm:pb-12 sm:pt-10">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-divider-line bg-cream-white px-6 py-16 shadow-md sm:px-12 sm:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-pearl-pink via-lavender-highlight to-sky-aqua"
          />

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-deep-rose-violet">
              Emma Kwon · BORN RARE
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-title-primary sm:text-6xl">
              THE BORN RARE LEXICON
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-body-text sm:text-xl">
              Words for the life you lived before you had language for it.
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-soft-text sm:text-base">
              Some lives are not missing meaning. They have been given the wrong language.
              Begin with the phrase that recognizes you.
            </p>
          </div>
        </div>
      </SharedSectionShell>

      <SharedSectionShell className="pt-0 sm:pt-0">
        <div className="grid gap-6 lg:grid-cols-3">
          {phrases.map((phrase) => (
            <article
              key={phrase.number}
              id={phrase.number}
              className="flex min-h-full flex-col rounded-[2rem] border border-divider-line bg-pearl-white p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1 sm:p-9"
            >
              <p className="text-xs font-semibold tracking-[0.28em] text-deep-rose-violet">
                {phrase.number}
              </p>
              <h2 className="mt-5 text-2xl font-semibold leading-tight text-title-primary">
                {phrase.title}
              </h2>
              <p className="mt-6 text-lg leading-8 text-body-text">{phrase.line}</p>
              <p className="mt-5 text-sm leading-7 text-soft-text">{phrase.body}</p>
              <a
                href={`#read-${phrase.number}`}
                className="mt-auto pt-8 text-sm font-semibold text-deep-rose-violet transition-opacity hover:opacity-65"
              >
                Begin here ↓
              </a>
            </article>
          ))}
        </div>
      </SharedSectionShell>

      <SharedSectionShell className="pt-0 sm:pt-0">
        <div className="rounded-[2.5rem] bg-title-primary px-6 py-14 text-cream-white sm:px-12 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne">
              Potential. Need. Choice.
            </p>
            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.02em] sm:text-5xl">
              One phrase names the possibility.
              <br />
              Two phrases name the price.
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-cream-white/80">
              BORN RARE begins when a misread life receives better language.
            </p>
          </div>
        </div>
      </SharedSectionShell>

      <SharedSectionShell className="pt-0 sm:pt-0">
        <div className="space-y-6">
          {phrases.map((phrase) => (
            <section
              key={`read-${phrase.number}`}
              id={`read-${phrase.number}`}
              className="scroll-mt-28 rounded-[2rem] border border-divider-line bg-cream-white p-7 sm:p-10"
            >
              <p className="text-xs font-semibold tracking-[0.28em] text-deep-rose-violet">
                {phrase.number}
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-title-primary">{phrase.title}</h2>
              <p className="mt-6 max-w-3xl text-xl leading-9 text-body-text">{phrase.line}</p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-soft-text">{phrase.body}</p>
            </section>
          ))}
        </div>
      </SharedSectionShell>

      <SharedSectionShell className="pt-0">
        <div className="rounded-[2.5rem] border border-divider-line bg-cream-white px-6 py-14 text-center shadow-md sm:px-12 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-eyebrow-label">
            The longer story
          </p>
          <h2 className="mt-6 text-3xl font-semibold tracking-[-0.02em] text-title-primary sm:text-5xl">
            These phrases came from a life.
            <br />
            BORN RARE is the longer story.
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-body-text">
            Emma Kwon’s literary memoir follows memory, ADHD, overfunctioning, creativity,
            and the decision to begin again at fifty two.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={`/${locale}/born-rare`}
              className="inline-flex min-w-52 items-center justify-center rounded-full bg-deep-rose-violet px-7 py-4 text-sm font-semibold text-cream-white transition-opacity hover:opacity-85"
            >
              Read about BORN RARE
            </Link>
            <Link
              href={`/${locale}`}
              className="inline-flex min-w-52 items-center justify-center rounded-full border border-divider-line px-7 py-4 text-sm font-semibold text-title-primary transition-colors hover:bg-warm-ivory"
            >
              Meet Emma Kwon
            </Link>
          </div>
        </div>
      </SharedSectionShell>
    </>
  );
}
