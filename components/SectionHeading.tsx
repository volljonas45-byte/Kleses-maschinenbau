import type { ReactNode } from "react";

type SectionHeadingProps = {
  index?: string; // z.B. "03"
  eyebrow?: string; // kleines Label über der Headline
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  subtitle,
  align = "left",
  dark = false,
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div
      className={`${isCenter ? "mx-auto text-center max-w-3xl" : "max-w-3xl"} ${className}`}
    >
      <div
        className={`flex items-center gap-4 mb-5 ${isCenter ? "justify-center" : ""}`}
      >
        {index && (
          <span
            className={`section-index text-sm font-bold ${dark ? "text-accent-light" : "text-accent"}`}
          >
            {index}
          </span>
        )}
        {eyebrow && (
          <span
            className={`text-xs font-semibold uppercase tracking-[0.2em] ${dark ? "text-white/60" : "text-ink/50"}`}
          >
            {eyebrow}
          </span>
        )}
        <span
          className={`h-px flex-1 max-w-[60px] ${dark ? "bg-white/20" : "bg-line"} ${isCenter ? "hidden" : ""}`}
        />
      </div>
      <h2
        className={`font-display font-extrabold uppercase leading-[0.95] text-4xl sm:text-5xl ${dark ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base sm:text-lg leading-relaxed ${dark ? "text-white/70" : "text-ink/60"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
