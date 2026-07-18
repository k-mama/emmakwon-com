import Link from "next/link";

type Choice = {
  label: string;
  href: string;
};

export function HomeFinalDoor({
  question,
  choices,
}: {
  question: string;
  choices: Choice[];
}) {
  return (
    <div className="mx-auto max-w-xl text-center">
      <h2
        className="text-2xl font-semibold text-obsidian sm:text-3xl"
        style={{ fontFamily: "var(--font-home-serif)" }}
      >
        {question}
      </h2>

      <div className="mt-8 flex flex-col gap-4">
        {choices.map((choice) => (
          <Link
            key={choice.href}
            href={choice.href}
            className="rounded-[1.5rem] bg-cream-white/90 px-8 py-5 text-sm font-semibold text-obsidian shadow-md transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            {choice.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
