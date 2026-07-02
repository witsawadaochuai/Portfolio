import type { PortfolioContent } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Skills({ content }: { content: PortfolioContent }) {
  return (
    <section className="section-shell">
      <div data-reveal>
        <SectionHeading eyebrow={content.sections.skillsEyebrow} title={content.sections.skillsTitle} />
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {content.skillGroups.map((group, index) => (
          <article
            key={group.title}
            data-reveal
            style={{ "--reveal-delay": `${(index % 3) * 100}ms` } as React.CSSProperties}
            className="card-hover min-h-40 rounded-2xl border border-white bg-white p-6 shadow-dashboard dark:border-slate-700 dark:bg-slate-900"
          >
            <h3 className="text-2xl font-black leading-tight text-ink dark:text-white">{group.title}</h3>
            <p className="mt-3 text-muted dark:text-slate-400">{group.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
