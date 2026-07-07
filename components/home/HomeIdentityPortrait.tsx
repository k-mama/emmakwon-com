import Image from "next/image";

export function HomeIdentityPortrait({
  src,
  alt,
  statement,
}: {
  src: string;
  alt: string;
  statement: string;
}) {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 sm:flex-row sm:items-center sm:gap-14">
      <div className="relative aspect-[4/5] w-56 shrink-0 overflow-hidden rounded-[2rem] shadow-xl sm:w-64">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 640px) 256px, 224px"
          className="object-cover"
        />
      </div>
      <p className="rounded-[2rem] bg-cream-white/90 px-8 py-10 text-center font-display text-2xl leading-relaxed text-title-primary shadow-md sm:text-left sm:text-3xl">
        {statement}
      </p>
    </div>
  );
}
