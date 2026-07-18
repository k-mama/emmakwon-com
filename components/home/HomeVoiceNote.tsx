export function HomeVoiceNote({ quote }: { quote: string }) {
  return (
    <div className="mx-auto max-w-xl text-center">
      <span aria-hidden className="text-2xl text-muted-bronze">
        &ldquo;
      </span>
      <p className="mx-auto mt-2 max-w-md text-balance text-lg italic leading-relaxed text-body-text sm:text-xl">
        {quote}
      </p>
    </div>
  );
}
