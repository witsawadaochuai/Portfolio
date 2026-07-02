import { useEffect, useRef, useState } from "react";

type MetricsProps = {
  metrics: Array<{ value: string; label: string }>;
};

/**
 * Renders a metric value, counting the numeric part up from zero the first
 * time it scrolls into view (e.g. "1.5 yr" animates 0.0 -> 1.5). Values
 * without a number render as-is.
 */
function AnimatedValue({ value }: { value: string }) {
  const match = value.match(/^(\D*?)([\d.]+)(.*)$/);
  const ref = useRef<HTMLElement>(null);
  const [display, setDisplay] = useState(() => (match ? `${match[1]}0${match[3]}` : value));

  useEffect(() => {
    const parts = value.match(/^(\D*?)([\d.]+)(.*)$/);
    if (!parts) {
      setDisplay(value);
      return;
    }

    const [, prefix, digits, suffix] = parts;
    const target = Number.parseFloat(digits);
    const decimals = digits.includes(".") ? digits.split(".")[1].length : 0;
    const finish = () => setDisplay(`${prefix}${digits}${suffix}`);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = ref.current;
    if (reduceMotion || !el || !("IntersectionObserver" in window)) {
      finish();
      return;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();

        const started = performance.now();
        const duration = 1100;
        const tick = (now: number) => {
          const progress = Math.min(1, (now - started) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(`${prefix}${(target * eased).toFixed(decimals)}${suffix}`);
          if (progress < 1) {
            frame = requestAnimationFrame(tick);
          } else {
            finish();
          }
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return <span ref={ref}>{display}</span>;
}

export function Metrics({ metrics }: MetricsProps) {
  return (
    <section className="grid gap-4 pb-8 sm:grid-cols-2 lg:grid-cols-4" aria-label="Career highlights">
      {metrics.map((metric, index) => (
        <div
          key={metric.label}
          data-reveal
          style={{ "--reveal-delay": `${index * 90}ms` } as React.CSSProperties}
          className="card-hover metric-card min-h-32 rounded-2xl border border-white bg-white p-5 shadow-dashboard dark:border-slate-700 dark:bg-slate-900"
        >
          <strong className="block text-3xl font-black leading-none text-slate-900 dark:text-white">
            <AnimatedValue value={metric.value} />
          </strong>
          <span className="mt-3 block text-sm text-muted dark:text-slate-400">{metric.label}</span>
        </div>
      ))}
    </section>
  );
}
