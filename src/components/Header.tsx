import {
  BriefcaseBusiness,
  FileDown,
  FolderKanban,
  Home,
  Languages,
  Layers3,
  Mail,
  Menu,
  Moon,
  Sun,
  Timer,
  X,
} from "lucide-react";
import type { Language, PortfolioContent, ThemeMode } from "../data/portfolio";
import { resumeUrl } from "../lib/assetUrl";

const navItems = [
  { key: "dashboard", href: "#top", section: "top", icon: Home },
  { key: "work", href: "#work", section: "work", icon: BriefcaseBusiness },
  { key: "scope", href: "#scope", section: "scope", icon: Layers3 },
  { key: "projects", href: "#projects", section: "projects", icon: FolderKanban },
  { key: "experience", href: "#experience", section: "experience", icon: Timer },
  { key: "contact", href: "#contact", section: "contact", icon: Mail },
] as const;

type SidebarNavProps = {
  isOpen: boolean;
  language: Language;
  theme: ThemeMode;
  content: PortfolioContent;
  activeSection: string;
  onToggle: () => void;
  onClose: () => void;
  onLanguageToggle: () => void;
  onThemeToggle: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export function Header({
  isOpen,
  language,
  theme,
  content,
  activeSection,
  onToggle,
  onClose,
  onLanguageToggle,
  onThemeToggle,
}: SidebarNavProps) {
  const closeOnSmallScreen = () => {
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={onToggle}
        className="fixed left-4 top-4 z-[70] inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/70 bg-white text-slate-800 shadow-dashboard transition hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
      </button>

      <div
        className={`fixed inset-0 z-[55] bg-slate-950/40 backdrop-blur-sm transition lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`fixed inset-y-0 left-0 z-[60] w-72 border-r border-white/10 bg-sidebar px-4 py-4 shadow-sidebar transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <a
            href="#top"
            onClick={closeOnSmallScreen}
            className="ml-14 rounded-xl px-2 py-2 text-lg font-black leading-tight text-white"
          >
            {content.sidebar.title}
            <span className="block text-white/55">{content.sidebar.subtitle}</span>
          </a>

          <div className="mt-8 rounded-xl border border-white/10 bg-white/8 p-4">
            <p className="text-xs font-black uppercase text-blue-200">{content.sidebar.badge}</p>
            <p className="mt-2 text-sm leading-6 text-white/60">
              {content.hero.body}
            </p>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={onLanguageToggle}
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/8 text-sm font-black text-white transition hover:bg-white hover:text-slate-900"
              aria-label="Toggle language"
            >
              <Languages size={16} aria-hidden="true" />
              {language === "en" ? "TH" : "EN"}
            </button>
            <button
              type="button"
              onClick={onThemeToggle}
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/8 text-sm font-black text-white transition hover:bg-white hover:text-slate-900"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={16} aria-hidden="true" /> : <Sun size={16} aria-hidden="true" />}
              {theme === "light" ? content.sidebar.dark : content.sidebar.light}
            </button>
          </div>

          <nav className="mt-7 grid gap-1.5 text-sm font-bold text-white/70" aria-label="Main navigation">
            {navItems.map((item) => {
              const Icon = item.icon;
              const label = content.nav[item.key];
              const isActive = item.section === activeSection;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeOnSmallScreen}
                  aria-current={isActive ? "true" : undefined}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                    isActive ? "bg-white text-slate-900 shadow-sm" : "hover:bg-white/15 hover:text-white"
                  }`}
                >
                  <Icon size={18} aria-hidden="true" />
                  {label}
                </a>
              );
            })}
          </nav>

          <a
            href={resumeUrl()}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 font-black text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-50"
          >
            <FileDown size={16} aria-hidden="true" />
            {content.sidebar.resume}
          </a>

          <p className="mt-auto border-t border-white/10 pt-5 text-xs leading-5 text-white/45">
            {content.sidebar.footer}
          </p>
        </div>
      </aside>
    </>
  );
}
