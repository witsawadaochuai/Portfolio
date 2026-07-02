import { useEffect, useState, type MouseEvent } from "react";
import { flushSync } from "react-dom";
import { ArrowUp, FileDown } from "lucide-react";
import { CaseStudies } from "./components/CaseStudies";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Metrics } from "./components/Metrics";
import { Projects } from "./components/Projects";
import { ScopeGrid } from "./components/ScopeGrid";
import { Skills } from "./components/Skills";
import { TechTicker } from "./components/TechTicker";
import { portfolioContent, type Language, type ThemeMode } from "./data/portfolio";
import { resumeUrl } from "./lib/assetUrl";
import { useActiveSection, useCardSpotlight, useScrollProgress, useScrollReveal } from "./lib/useScrollFx";

const sectionIds = ["top", "work", "scope", "projects", "experience", "contact"] as const;

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem("portfolio-language");
    return stored === "th" ? "th" : "en";
  });
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const stored = localStorage.getItem("portfolio-theme");
    return stored === "dark" ? "dark" : "light";
  });

  const content = portfolioContent[language];
  const scrollProgress = useScrollProgress();
  const activeSection = useActiveSection(sectionIds);
  useScrollReveal([language]);
  useCardSpotlight();

  // Theme switch expands as a circle from the toggle button when the
  // View Transitions API is available; otherwise it falls back to the
  // regular CSS color transition.
  const handleThemeToggle = (event?: MouseEvent<HTMLButtonElement>) => {
    const apply = () => setTheme((current) => (current === "light" ? "dark" : "light"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!document.startViewTransition || reduceMotion) {
      apply();
      return;
    }

    if (event) {
      const rect = event.currentTarget.getBoundingClientRect();
      document.documentElement.style.setProperty("--vt-x", `${rect.left + rect.width / 2}px`);
      document.documentElement.style.setProperty("--vt-y", `${rect.top + rect.height / 2}px`);
    }

    document.startViewTransition(() => {
      flushSync(apply);
    });
  };

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    setIsNavOpen(desktopQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsNavOpen(event.matches);
    };

    desktopQuery.addEventListener("change", handleChange);
    return () => desktopQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language === "th" ? "th" : "en";
  }, [language]);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <>
      <div
        className="fixed inset-x-0 top-0 z-[90] h-1 origin-left bg-gradient-to-r from-blue-600 via-sky-400 to-emerald-400"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />
      <Header
        isOpen={isNavOpen}
        onToggle={() => setIsNavOpen((current) => !current)}
        onClose={() => setIsNavOpen(false)}
        language={language}
        theme={theme}
        content={content}
        activeSection={activeSection}
        onLanguageToggle={() => setLanguage((current) => (current === "en" ? "th" : "en"))}
        onThemeToggle={handleThemeToggle}
      />
      <main className={`transition-[padding] duration-300 ${isNavOpen ? "lg:pl-72" : "lg:pl-0"}`}>
        <div className="mx-auto w-[min(1240px,calc(100%-2rem))] pt-5">
          <div className="sticky top-4 z-40 mb-5 rounded-2xl border border-white/80 bg-white/85 px-4 py-3 shadow-dashboard backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-900/85 md:px-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase text-slate-400 dark:text-slate-500">
                  {content.topbar.breadcrumb}
                </p>
                <h1 className="text-lg font-black text-slate-900 dark:text-white">{content.topbar.title}</h1>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-slate-900 px-4 text-sm font-black text-white transition hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500"
                  href={resumeUrl()}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FileDown size={16} aria-hidden="true" />
                  {content.topbar.resume}
                </a>
              </div>
            </div>
          </div>
          <div key={language} className="content-transition">
            <Hero content={content} />
            <TechTicker items={content.techTicker} />
            <Metrics metrics={content.metrics} />
            <CaseStudies content={content} />
            <ScopeGrid content={content} />
            <Projects content={content} />
            <Experience content={content} />
            <Skills content={content} />
            <Contact content={content} />
          </div>
        </div>
      </main>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-[70] inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/70 bg-white text-slate-800 shadow-dashboard transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white ${
          scrollProgress > 0.12 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={20} aria-hidden="true" />
      </button>
    </>
  );
}
