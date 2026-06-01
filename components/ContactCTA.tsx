import Link from "next/link";
import { ArrowRight, Phone, Mail, Clock, MapPin } from "lucide-react";
import { company } from "@/data/company";
import MapEmbed from "./MapEmbed";

export default function ContactCTA() {
  return (
    <section className="bg-ink overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

          {/* Left: Text + CTA */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent-light">
              <span className="h-px w-8 bg-accent" />
              Projekt anfragen
            </span>
            <h2 className="mt-5 font-display font-extrabold uppercase text-white leading-[0.95] text-4xl sm:text-5xl">
              Haben Sie eine
              <br />
              Zeichnung für uns?
            </h2>
            <p className="mt-6 text-white/60 leading-relaxed max-w-md">
              Senden Sie uns Ihre Anfrage mit Zeichnung oder CAD-Datei – wir
              melden uns schnell und unkompliziert mit einem individuellen
              Angebot.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-display font-semibold uppercase tracking-wide text-sm px-7 py-4 transition-colors shadow-lg shadow-accent/20"
              >
                Anfrage senden <ArrowRight size={18} />
              </Link>
              <a
                href={company.phoneHref}
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-display font-semibold uppercase tracking-wide text-sm px-7 py-4 transition-all"
              >
                <Phone size={16} /> Anrufen
              </a>
            </div>

            {/* Kontaktinfos */}
            <ul className="mt-10 space-y-4 border-t border-white/10 pt-8">
              <li>
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-accent-light transition-colors group"
                >
                  <span className="w-9 h-9 flex items-center justify-center bg-white/5 group-hover:bg-accent/20 transition-colors">
                    <Phone size={16} className="text-accent" />
                  </span>
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={company.emailHref}
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-accent-light transition-colors group"
                >
                  <span className="w-9 h-9 flex items-center justify-center bg-white/5 group-hover:bg-accent/20 transition-colors">
                    <Mail size={16} className="text-accent" />
                  </span>
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <span className="w-9 h-9 flex items-center justify-center bg-white/5">
                  <Clock size={16} className="text-accent" />
                </span>
                {company.openingHours}
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <span className="w-9 h-9 flex items-center justify-center bg-white/5">
                  <MapPin size={16} className="text-accent" />
                </span>
                {company.address.full}
              </li>
            </ul>
          </div>

          {/* Right: Map */}
          <div className="relative">
            <MapEmbed height="460px" className="border-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
