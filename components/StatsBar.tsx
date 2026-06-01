import Reveal from "./Reveal";

const stats = [
  { value: "10+", label: "Jahre Erfahrung" },
  { value: "5", label: "Achsen CNC-Technik" },
  { value: "24h", label: "Reaktionszeit" },
  { value: "100%", label: "Qualitätskontrolle" },
];

export default function StatsBar() {
  return (
    <div className="bg-ink-soft border-y border-white/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07}>
              <div className="flex flex-col items-center text-center lg:px-8">
                <span className="font-display font-extrabold text-4xl sm:text-5xl text-accent-light tabular-nums">
                  {s.value}
                </span>
                <span className="mt-2 text-xs font-semibold uppercase tracking-widest text-white/50">
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
