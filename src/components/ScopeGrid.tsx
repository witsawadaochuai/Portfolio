import type { PortfolioContent } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

type ScopeGridProps = {
  content: PortfolioContent;
};

export function ScopeGrid({ content }: ScopeGridProps) {
  return (
    <section id="scope" className="section-shell">
      <SectionHeading
        eyebrow={content.sections.scopeEyebrow}
        title={content.sections.scopeTitle}
        subtitle={content.sections.scopeSubtitle}
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {content.scopeItems.map((item, index) => (
          <article key={item.title} className="min-h-56 rounded-2xl border border-white bg-white p-5 shadow-dashboard dark:border-slate-700 dark:bg-slate-900">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-sm font-black text-white">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 text-xl font-black leading-tight text-ink dark:text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted dark:text-slate-400">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
