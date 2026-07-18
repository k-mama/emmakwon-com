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
      <h2 className="font-display text-2xl text-title-primary sm:text-3xl">
        {question}
      </h2>

      <div className="mt-8 flex flex-col gap-4">
        {choices.map((choice) => (
          <Link
            key={choice.href}
            href={choice.href}
            className="rounded-full border border-divider-line px-8 py-4 text-sm text-body-text transition-colors duration-300 hover:border-title-primary hover:text-title-primary"
          >
            {choice.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
