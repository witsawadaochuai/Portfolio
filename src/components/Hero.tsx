import { ArrowDown, FileDown } from "lucide-react";
import type { PortfolioContent } from "../data/portfolio";
import { assetUrl } from "../lib/assetUrl";

type HeroProps = {
  content: PortfolioContent;
};

export function Hero({ content }: HeroProps) {
  return (
    <section id="top" className="grid gap-6 pb-8 pt-2 xl:grid-cols-[1.05fr_0.95fr]">
      <div className="rounded-2xl bg-dashboard-hero p-6 text-white shadow-dashboard md:p-8">
        <p className="text-xs font-black uppercase tracking-normal text-blue-100">
          {content.hero.eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-normal md:text-6xl">
          {content.hero.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
          {content.hero.body}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="btn-primary" href="#work">
            <ArrowDown size={18} aria-hidden="true" />
            {content.hero.viewWork}
          </a>
          <a
            className="btn-secondary"
            href={assetUrl("assets/Resume-Witsawa-Daochuai.pdf")}
            target="_blank"
            rel="noreferrer"
          >
            <FileDown size={18} aria-hidden="true" />
            {content.hero.resumePdf}
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-white bg-white p-3 shadow-dashboard dark:border-slate-700 dark:bg-slate-900">
        <img
          className="aspect-[4/3] h-full w-full rounded-xl object-cover"
          src={assetUrl("assets/portfolio/cover.png")}
          alt="Portfolio visual for e-wallet work"
        />
        <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-dashboard backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/85">
          <img
            className="h-20 w-20 shrink-0 rounded-2xl object-cover shadow-card"
            src={assetUrl("assets/Dong.jpg")}
            alt="Witsawa Daochuai"
          />
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-blue">Witsawa Daochuai</p>
            <p className="mt-1 text-sm font-semibold text-muted dark:text-slate-400">
              Full-Stack Software Engineer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
