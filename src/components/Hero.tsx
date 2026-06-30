import { ArrowDown, FileDown, ShieldCheck, Sparkles, WalletCards } from "lucide-react";
import type { PortfolioContent } from "../data/portfolio";
import { assetUrl } from "../lib/assetUrl";

type HeroProps = {
  content: PortfolioContent;
};

export function Hero({ content }: HeroProps) {
  return (
    <section id="top" className="grid gap-6 pb-8 pt-2 xl:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-2xl bg-dashboard-hero p-6 text-white shadow-dashboard md:p-8">
        <div className="mb-8 flex flex-col items-start gap-5 rounded-2xl border border-white/10 bg-white/8 p-4 md:flex-row">
          <img
            className="h-auto w-40 shrink-0 rounded-2xl bg-white/10 object-contain shadow-card ring-2 ring-white/20 md:w-52"
            src={assetUrl("assets/Dong.jpg")}
            alt="Witsawa Daochuai"
          />
          <div>
            <p className="text-2xl font-black leading-tight text-white md:text-3xl">Witsawa Daochuai</p>
            <p className="mt-2 text-base font-semibold text-white/60 md:text-lg">Full-Stack Software Engineer</p>
          </div>
        </div>
        <p className="text-xs font-black uppercase tracking-normal text-blue-100">{content.hero.eyebrow}</p>
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

      <div className="relative overflow-hidden rounded-2xl border border-white bg-white p-4 shadow-dashboard dark:border-slate-700 dark:bg-slate-900">
        <img
          className="h-auto w-full rounded-xl object-contain"
          src={assetUrl("assets/portfolio/cover.png")}
          alt="Portfolio visual for e-wallet work"
        />
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
            <WalletCards className="text-blue" size={22} aria-hidden="true" />
            <p className="mt-3 text-sm font-black text-slate-900 dark:text-white">FinTech Platform</p>
            <p className="mt-1 text-xs leading-5 text-muted dark:text-slate-400">
              Wallet, partner API, transaction, settlement, KYC back office
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
            <ShieldCheck className="text-green" size={22} aria-hidden="true" />
            <p className="mt-3 text-sm font-black text-slate-900 dark:text-white">Security Work</p>
            <p className="mt-1 text-xs leading-5 text-muted dark:text-slate-400">
              Keycloak PKCE, brute-force protection, OWASP pentest fixes
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
            <Sparkles className="text-coral" size={22} aria-hidden="true" />
            <p className="mt-3 text-sm font-black text-slate-900 dark:text-white">AI Integration</p>
            <p className="mt-1 text-xs leading-5 text-muted dark:text-slate-400">
              Agent workflows, channel webhooks, RAG and local LLM exploration
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
