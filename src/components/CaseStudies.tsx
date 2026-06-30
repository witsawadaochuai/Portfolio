import { ShieldCheck } from "lucide-react";
import type { PortfolioContent } from "../data/portfolio";
import { assetUrl } from "../lib/assetUrl";
import { SectionHeading } from "./SectionHeading";

type CaseStudiesProps = {
  content: PortfolioContent;
};

export function CaseStudies({ content }: CaseStudiesProps) {
  const { caseStudies, featuredCase } = content;

  return (
    <section id="work" className="section-shell">
      <SectionHeading eyebrow={content.sections.workEyebrow} title={content.sections.workTitle} />

      <article className="mt-6 grid gap-7 rounded-2xl border border-white bg-white p-5 shadow-dashboard dark:border-slate-700 dark:bg-slate-900 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="overflow-hidden rounded-xl">
          <img className="h-auto w-full object-contain" src={assetUrl(featuredCase.image)} alt="" />
        </div>
        <div className="self-center">
          <p className="text-xs font-black uppercase tracking-normal text-blue">{featuredCase.label}</p>
          <h3 className="mt-2 text-3xl font-black leading-tight text-ink dark:text-white">{featuredCase.title}</h3>
          <p className="mt-4 text-muted dark:text-slate-400">{featuredCase.summary}</p>
          <ul className="mt-5 grid gap-3">
            {featuredCase.bullets?.map((bullet) => (
              <li key={bullet} className="flex gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 text-ink/85 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                <ShieldCheck className="mt-1 shrink-0 text-green" size={18} aria-hidden="true" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {featuredCase.tech?.map((tech) => (
              <span key={tech} className="rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </article>

      <div className="mt-5 grid gap-5 lg:grid-cols-3">
        {caseStudies.map((item) => (
          <article key={item.title} className="rounded-2xl border border-white bg-white p-5 shadow-dashboard dark:border-slate-700 dark:bg-slate-900">
            <div className="overflow-hidden rounded-xl">
              <img className="h-auto w-full object-contain" src={assetUrl(item.image)} alt="" />
            </div>
            <p className="mt-5 text-xs font-black uppercase tracking-normal text-blue">{item.label}</p>
            <h3 className="mt-2 text-2xl font-black leading-tight text-ink dark:text-white">{item.title}</h3>
            <p className="mt-3 text-muted dark:text-slate-400">{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
