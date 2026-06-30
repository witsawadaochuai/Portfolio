import { ExternalLink } from "lucide-react";
import type { PortfolioContent } from "../data/portfolio";
import { assetUrl } from "../lib/assetUrl";
import { SectionHeading } from "./SectionHeading";

type ProjectsProps = {
  content: PortfolioContent;
};

export function Projects({ content }: ProjectsProps) {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading eyebrow={content.sections.projectsEyebrow} title={content.sections.projectsTitle} />
      <div className="mt-8 grid gap-4">
        {content.projects.map((project) => (
          <article key={project.title} className="grid gap-5 rounded-2xl border border-white bg-white p-4 shadow-dashboard dark:border-slate-700 dark:bg-slate-900 md:grid-cols-[280px_1fr]">
            <div className="overflow-hidden rounded-xl">
              <img className="h-auto w-full object-contain" src={assetUrl(project.image)} alt="" />
            </div>
            <div>
              <h3 className="text-2xl font-black leading-tight text-ink dark:text-white">{project.title}</h3>
              <p className="mt-2 text-muted dark:text-slate-400">{project.summary}</p>
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 font-black text-blue"
                >
                  GitHub <ExternalLink size={16} aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
