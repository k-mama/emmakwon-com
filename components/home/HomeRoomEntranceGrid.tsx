import Link from "next/link";

type RoomEntrance = {
  key: string;
  kicker: string;
  label: string;
  description: string;
  href: string;
};

const CARD_CLASSES_BY_ROOM: Record<string, string> = {
  "born-rare": "bg-soft-blush text-soft-ink",
  emmaestro: "bg-ice-cream-lavender text-soft-ink",
  "amazing-tiger-publishing": "bg-sunny-orange text-soft-ink",
  works: "bg-clear-blue text-cream-white",
  "k-mama": "bg-candy-pink text-soft-ink",
};

export function HomeRoomEntranceGrid({
  roomEntrances,
}: {
  roomEntrances: RoomEntrance[];
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {roomEntrances.map((room) => {
        const cardClasses =
          CARD_CLASSES_BY_ROOM[room.key] ?? "bg-cream-white text-soft-ink";

        return (
          <Link
            key={room.key}
            href={room.href}
            className={`group flex flex-col justify-between gap-10 rounded-3xl p-8 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-10 ${cardClasses}`}
          >
            <span className="text-xs uppercase tracking-[0.25em] opacity-70">
              {room.kicker}
            </span>
            <div>
              <h3 className="font-display text-2xl sm:text-3xl">
                {room.label}
              </h3>
              <p className="mt-2 text-sm opacity-80">{room.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
