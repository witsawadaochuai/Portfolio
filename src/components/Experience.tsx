import type { PortfolioContent } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

type ExperienceProps = {
  content: PortfolioContent;
};

export function Experience({ content }: ExperienceProps) {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading eyebrow={content.sections.experienceEyebrow} title={content.sections.experienceTitle} />
      <div className="mt-8 grid gap-4">
        {content.experience.map((item) => (
          <article key={item.role} className="grid gap-5 rounded-2xl border border-white bg-white p-6 shadow-dashboard dark:border-slate-700 dark:bg-slate-900 md:grid-cols-[190px_1fr]">
            <time className="font-black text-green">{item.period}</time>
            <div>
              <h3 className="text-2xl font-black leading-tight text-ink dark:text-white">{item.role}</h3>
              <p className="mt-2 text-muted dark:text-slate-400">{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
