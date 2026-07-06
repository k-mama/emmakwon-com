export function HomeProofStrip({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-center text-xs uppercase tracking-[0.2em] text-soft-text">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
