import { Mail } from "lucide-react";
import type { PortfolioContent } from "../data/portfolio";

type ContactProps = {
  content: PortfolioContent;
};

export function Contact({ content }: ContactProps) {
  return (
    <section id="contact" className="py-12">
      <div>
        <p className="text-xs font-black uppercase tracking-normal text-coral">{content.sections.contactEyebrow}</p>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {content.contactLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            className="flex items-center justify-between gap-3 rounded-2xl border border-white bg-white px-4 py-4 font-black text-blue shadow-dashboard transition hover:-translate-y-0.5 hover:border-blue dark:border-slate-700 dark:bg-slate-900"
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
