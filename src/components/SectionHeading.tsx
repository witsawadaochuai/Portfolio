type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-black uppercase tracking-normal text-coral">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-black leading-tight tracking-normal text-ink dark:text-white md:text-5xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-lg text-muted dark:text-slate-400">{subtitle}</p> : null}
    </div>
  );
}
