type MetricsProps = {
  metrics: Array<{ value: string; label: string }>;
};

export function Metrics({ metrics }: MetricsProps) {
  return (
    <section className="grid gap-4 pb-8 sm:grid-cols-2 lg:grid-cols-4" aria-label="Career highlights">
      {metrics.map((metric) => (
        <div key={metric.label} className="min-h-32 rounded-2xl border border-white bg-white p-5 shadow-dashboard dark:border-slate-700 dark:bg-slate-900">
          <strong className="block text-3xl font-black leading-none text-slate-900 dark:text-white">{metric.value}</strong>
          <span className="mt-3 block text-sm text-muted dark:text-slate-400">{metric.label}</span>
        </div>
      ))}
    </section>
  );
}
