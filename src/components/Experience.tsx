import type { PortfolioContent } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

type ExperienceProps = {
  content: PortfolioContent;
};

export function Experience({ content }: ExperienceProps) {
  return (
    <section id="experience" className="section-shell">
      <div data-reveal>
        <SectionHeading eyebrow={content.sections.experienceEyebrow} title={content.sections.experienceTitle} />
      </div>
      <ol className="relative mt-8 grid gap-6 border-l-2 border-slate-200 pl-6 dark:border-slate-700 md:ml-2">
        {content.experience.map((item, index) => (
          <li
            key={item.role}
            data-reveal
            style={{ "--reveal-delay": `${index * 100}ms` } as React.CSSProperties}
            className="relative"
          >
            <span
              className="absolute -left-[35px] top-7 h-4 w-4 rounded-full border-4 border-cream bg-green shadow-card dark:border-slate-950"
              aria-hidden="true"
            />
            <article className="card-hover rounded-2xl border border-white bg-white p-6 shadow-dashboard dark:border-slate-700 dark:bg-slate-900">
              <time className="inline-flex rounded-full bg-mint px-3 py-1 text-sm font-black text-green dark:bg-emerald-500/15">
                {item.period}
              </time>
              <h3 className="mt-3 text-2xl font-black leading-tight text-ink dark:text-white">{item.role}</h3>
              <p className="mt-2 text-muted dark:text-slate-400">{item.body}</p>
              {item.tags ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue dark:bg-blue-500/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
