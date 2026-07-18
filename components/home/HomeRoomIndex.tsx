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
    <div className="mx-auto max-w-4xl">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted-bronze">
        {label}
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {roomEntrances.map((room) => (
          <Link
            key={room.key}
            href={room.href}
            className="group flex flex-col justify-between gap-8 rounded-3xl bg-cream-white/90 p-8 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-10"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-bronze">
                {room.kicker}
              </span>

              {room.image ? (
                <div className="relative aspect-square w-12 shrink-0 overflow-hidden rounded-lg shadow-sm ring-1 ring-divider-line sm:w-14">
                  <Image
                    src={room.image}
                    alt=""
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
              ) : null}
            </div>

            <div>
              <h3
                className="text-2xl font-semibold text-obsidian sm:text-3xl"
                style={{ fontFamily: "var(--font-home-display)" }}
              >
                {room.label}
              </h3>
              <p className="mt-2 text-sm text-body-text sm:text-base">
                {room.description}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-muted-bronze underline decoration-muted-bronze/40 underline-offset-4">
                {room.enterLabel}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
