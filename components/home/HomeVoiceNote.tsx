export function HomeVoiceNote({ quote }: { quote: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span aria-hidden className="text-2xl text-muted-bronze">
        &ldquo;
      </span>
      <p className="mt-2 text-balance text-lg italic leading-relaxed text-obsidian sm:text-xl">
        {quote}
      </p>
    </div>
  );
}
