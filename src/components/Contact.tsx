import { Mail } from "lucide-react";
import type { PortfolioContent } from "../data/portfolio";

type ContactProps = {
  content: PortfolioContent;
};

export function Contact({ content }: ContactProps) {
  return (
    <section id="contact" className="py-12">
      <div data-reveal>
        <p className="text-xs font-black uppercase tracking-normal text-coral">{content.sections.contactEyebrow}</p>
        <h2 className="mt-3 text-4xl font-black leading-tight tracking-normal text-ink dark:text-white md:text-5xl">
          {content.sections.contactTitle}
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-muted dark:text-slate-400">{content.sections.contactBody}</p>
      </div>
      <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {content.contactLinks.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            data-reveal
            style={{ "--reveal-delay": `${index * 90}ms` } as React.CSSProperties}
            className="flex items-center justify-between gap-3 rounded-2xl border border-white bg-white px-4 py-4 font-black text-blue shadow-dashboard transition hover:-translate-y-1 hover:border-blue dark:border-slate-700 dark:bg-slate-900"
          >
            <span>
              <span className="block text-xs uppercase text-muted">{link.label}</span>
              {link.value}
            </span>
            <Mail size={18} aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  );
}
