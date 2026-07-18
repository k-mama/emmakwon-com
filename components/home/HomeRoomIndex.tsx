import Image from "next/image";
import Link from "next/link";

type RoomEntrance = {
  key: string;
  kicker: string;
  label: string;
  description: string;
  enterLabel: string;
  href: string;
  image?: string;
};

export function HomeRoomIndex({
  label,
  roomEntrances,
}: {
  label: string;
  roomEntrances: RoomEntrance[];
}) {
  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-center text-xs uppercase tracking-[0.3em] text-eyebrow-label">
        {label}
      </p>

      <div className="mt-8 border-t border-divider-line">
        {roomEntrances.map((room) => (
          <Link
            key={room.key}
            href={room.href}
            className="group flex items-center justify-between gap-6 border-b border-divider-line py-7 transition-opacity duration-300 hover:opacity-70 sm:py-8"
          >
            <div className="min-w-0">
              <span className="text-xs uppercase tracking-[0.25em] text-eyebrow-label">
                {room.kicker}
              </span>
              <h3 className="mt-2 font-display text-2xl text-title-primary sm:text-3xl">
                {room.label}
              </h3>
              <p className="mt-1 text-sm text-body-text sm:text-base">
                {room.description}
              </p>
              <span className="mt-3 inline-block text-xs uppercase tracking-[0.2em] text-soft-text underline decoration-divider-line underline-offset-4">
                {room.enterLabel}
              </span>
            </div>

            {room.image ? (
              <div className="relative aspect-[4/5] w-16 shrink-0 overflow-hidden rounded-xl shadow-sm sm:w-20">
                <Image
                  src={room.image}
                  alt=""
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
            ) : null}
          </Link>
        ))}
      </div>
    </div>
  );
}
