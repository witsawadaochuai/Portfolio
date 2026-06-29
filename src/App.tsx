import { useEffect, useState } from "react";
import { FileDown } from "lucide-react";
import { CaseStudies } from "./components/CaseStudies";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Metrics } from "./components/Metrics";
import { Projects } from "./components/Projects";
import { ScopeGrid } from "./components/ScopeGrid";
import { Skills } from "./components/Skills";
import { portfolioContent, type Language, type ThemeMode } from "./data/portfolio";
import { assetUrl } from "./lib/assetUrl";

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
      <Header
        isOpen={isNavOpen}
        onToggle={() => setIsNavOpen((current) => !current)}
        onClose={() => setIsNavOpen(false)}
        language={language}
        theme={theme}
        content={content}
        onLanguageToggle={() => setLanguage((current) => (current === "en" ? "th" : "en"))}
        onThemeToggle={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
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
                  className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-slate-900 px-4 text-sm font-black text-white transition hover:bg-blue-600"
                  href={assetUrl("assets/Resume-Witsawa-Daochuai.pdf")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FileDown size={16} aria-hidden="true" />
                  {content.topbar.resume}
                </a>
              </div>
            </div>
          </div>
          <div key={`${language}-${theme}`} className="content-transition">
            <Hero content={content} />
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
    </>
  );
}
