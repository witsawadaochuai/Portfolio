type TechTickerProps = {
  items: string[];
};

/** Infinite marquee of tech-stack chips; pauses on hover. Decorative only. */
export function TechTicker({ items }: TechTickerProps) {
  const doubled = [...items, ...items];

  return (
    <div className="ticker-mask overflow-hidden pb-8" aria-hidden="true">
      <div className="ticker-track flex w-max">
        {doubled.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="mr-3 whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-600 shadow-card dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
