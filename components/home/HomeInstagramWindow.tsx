export function HomeInstagramWindow({
  label,
  description,
  handle,
  url,
}: {
  label: string;
  description: string;
  handle: string;
  url: string;
}) {
  return (
    <div className="rounded-[2.5rem] bg-playful-magenta px-8 py-16 text-center shadow-md sm:px-16">
      <p className="text-xs uppercase tracking-[0.25em] text-cream-white/70">
        {label}
      </p>
      <p className="mx-auto mt-4 max-w-md text-cream-white/90">
        {description}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block text-sm tracking-wide text-cream-white underline decoration-cream-white/50 underline-offset-4 transition-colors duration-300 hover:text-sunny-orange"
      >
        {handle}
      </a>
    </div>
  );
}
