import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { company } from "@/data/company";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-ink">
      {/* Hintergrundbild */}
      <Image
        src="/images/hero/hero.jpg"
        alt="CNC-Bearbeitung bei KELES Maschinenbau"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-50"
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pb-20 pt-32 w-full">
        <div className="flex items-center gap-4 mb-6">
          <span className="section-index text-accent-light font-bold text-sm">
            01
          </span>
          <span className="h-px w-12 bg-accent" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
            CNC-Fertigung · Augsburg · seit {company.founded}
          </span>
        </div>

        <h1 className="font-display font-extrabold uppercase text-white leading-[0.9] text-5xl sm:text-7xl lg:text-8xl max-w-4xl">
          Präzision,
          <br />
          die <span className="text-accent-light">bewegt</span>
        </h1>

        <p className="mt-7 max-w-xl text-lg text-white/75 leading-relaxed">
          Ihr Spezialist für CNC-Fräsen, CNC-Drehen und 5-Achsen-Bearbeitung.
          Vom Prototyp bis zur Kleinserie – termingerecht und in höchster
          Qualität.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row gap-4">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-display font-semibold uppercase tracking-wide text-sm px-7 py-4 transition-colors shadow-lg shadow-accent/20"
          >
            Anfrage stellen <ArrowRight size={18} />
          </Link>
          <Link
            href="/leistungen"
            className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white hover:text-ink font-display font-semibold uppercase tracking-wide text-sm px-7 py-4 transition-all"
          >
            Leistungen entdecken
          </Link>
        </div>

        {/* Quick-Contact unten */}
        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/60">
          <a
            href={company.phoneHref}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone size={15} className="text-accent-light" /> {company.phone}
          </a>
          <span className="hidden sm:inline text-white/20">|</span>
          <span>{company.address.full}</span>
        </div>
      </div>
    </section>
  );
}
