import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Send, FileText, PackageCheck } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Send,
    title: "Anfrage senden",
    desc: "Laden Sie Ihre Zeichnung oder CAD-Datei hoch und beschreiben Sie Ihr Projekt – Material, Stückzahl, Toleranzen.",
  },
  {
    num: "02",
    icon: FileText,
    title: "Angebot in 24h",
    desc: "Wir prüfen Ihre Unterlagen und senden Ihnen innerhalb von 24 Stunden ein detailliertes, faires Angebot.",
  },
  {
    num: "03",
    icon: PackageCheck,
    title: "Präzisionsteil geliefert",
    desc: "Nach Freigabe fertigen wir Ihr Bauteil termingerecht – mit lückenloser Qualitätskontrolle und sicherer Verpackung.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            index="07"
            eyebrow="So einfach geht's"
            title={
              <>
                Vom Auftrag
                <br />
                zum Bauteil
              </>
            }
            subtitle="Drei Schritte – unkompliziert, transparent und zuverlässig."
          />
        </Reveal>

        <div className="mt-14 grid gap-px bg-paper-dark sm:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.1}>
              <div className="relative bg-white p-8 sm:p-10 h-full group hover:bg-paper transition-colors duration-300">
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden sm:block absolute top-14 right-0 w-px h-8 bg-paper-dark" />
                )}

                <div className="flex items-start gap-5">
                  <span className="font-display font-extrabold text-5xl text-accent/10 tabular-nums leading-none select-none">
                    {step.num}
                  </span>
                  <div className="w-12 h-12 flex items-center justify-center bg-accent text-white shrink-0">
                    <step.icon size={22} />
                  </div>
                </div>

                <h3 className="mt-6 font-display font-bold uppercase text-lg text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-ink/60 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
