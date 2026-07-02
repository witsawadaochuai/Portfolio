import { useEffect, useState } from "react";
import { ArrowDown, FileDown, ShieldCheck, Sparkles, WalletCards } from "lucide-react";
import type { PortfolioContent } from "../data/portfolio";
import { assetUrl, resumeUrl } from "../lib/assetUrl";

/** Cycles through role titles with a fade-slide swap every few seconds. */
function RotatingRoles({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (roles.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((current) => (current + 1) % roles.length), 2600);
    return () => window.clearInterval(id);
  }, [roles]);

  return (
    <span key={roles[index]} className="role-swap inline-block">
      {roles[index]}
    </span>
  );
}

type HeroProps = {
  content: PortfolioContent;
};

const highlightCards = [
  {
    icon: WalletCards,
    iconClass: "text-blue",
    title: "FinTech Platform",
    body: "Wallet, partner API, transaction, settlement, KYC back office",
  },
  {
    icon: ShieldCheck,
    iconClass: "text-green",
    title: "Security Work",
    body: "Keycloak PKCE, brute-force protection, OWASP pentest fixes",
  },
  {
    icon: Sparkles,
    iconClass: "text-coral",
    title: "AI Integration",
    body: "Agent workflows, channel webhooks, RAG and local LLM exploration",
  },
] as const;

export function Hero({ content }: HeroProps) {
  return (
    <section id="top" className="grid gap-6 pb-8 pt-2 xl:grid-cols-[0.95fr_1.05fr]">
      <div className="hero-aurora relative overflow-hidden rounded-2xl bg-dashboard-hero p-6 text-white shadow-dashboard md:p-8">
        <div className="relative z-10">
          <div className="mb-8 flex flex-col items-start gap-5 rounded-2xl border border-white/10 bg-white/8 p-4 md:flex-row">
            <img
              className="hero-photo h-auto w-40 shrink-0 rounded-2xl bg-white/10 object-contain shadow-card ring-2 ring-white/20 md:w-52"
              src={assetUrl("assets/Dong.jpg")}
              alt="Witsawa Daochuai"
            />
            <div>
              <p className="text-2xl font-black leading-tight text-white md:text-3xl">Witsawa Daochuai</p>
              <p className="mt-2 min-h-7 text-base font-semibold text-white/60 md:text-lg">
                <RotatingRoles roles={content.hero.roles} />
              </p>
            </div>
          </div>
          <p className="text-xs font-black uppercase tracking-normal text-blue-100">{content.hero.eyebrow}</p>
          <h1 className="hero-title mt-4 max-w-4xl text-4xl font-black leading-tight tracking-normal md:text-6xl">
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
            <a className="btn-secondary" href={resumeUrl()} target="_blank" rel="noreferrer">
              <FileDown size={18} aria-hidden="true" />
              {content.hero.resumePdf}
            </a>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-white bg-white p-4 shadow-dashboard dark:border-slate-700 dark:bg-slate-900">
        <div className="overflow-hidden rounded-xl">
          <img
            className="h-auto w-full rounded-xl object-contain transition-transform duration-700 hover:scale-[1.03]"
            src={assetUrl("assets/portfolio/cover.png")}
            alt="Portfolio visual for e-wallet work"
          />
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {highlightCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                data-reveal
                style={{ "--reveal-delay": `${index * 110}ms` } as React.CSSProperties}
                className="card-hover rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800"
              >
                <Icon className={card.iconClass} size={22} aria-hidden="true" />
                <p className="mt-3 text-sm font-black text-slate-900 dark:text-white">{card.title}</p>
                <p className="mt-1 text-xs leading-5 text-muted dark:text-slate-400">{card.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
