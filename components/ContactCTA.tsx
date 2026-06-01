import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { company } from "@/data/company";

export default function ContactCTA() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-light">
              Projekt anfragen
            </span>
            <h2 className="mt-5 font-display font-extrabold uppercase text-white leading-[0.95] text-4xl sm:text-5xl">
              Haben Sie eine
              <br />
              Zeichnung für uns?
            </h2>
            <p className="mt-6 text-white/70 leading-relaxed max-w-md">
              Senden Sie uns Ihre Anfrage mit Zeichnung oder CAD-Datei – wir
              melden uns schnell und unkompliziert mit einem Angebot.
            </p>
          </div>

          <div className="lg:justify-self-end w-full lg:max-w-md">
            <div className="bg-steel border border-white/10 p-8">
              <Link
                href="/kontakt"
                className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent-dark text-white font-display font-semibold uppercase tracking-wide text-sm px-7 py-4 transition-colors"
              >
                Zum Kontaktformular <ArrowRight size={18} />
              </Link>
              <div className="mt-6 space-y-4 text-sm">
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-3 text-white/80 hover:text-accent-light transition-colors"
                >
                  <Phone size={18} className="text-accent" />
                  {company.phone}
                </a>
                <a
                  href={company.emailHref}
                  className="flex items-center gap-3 text-white/80 hover:text-accent-light transition-colors"
                >
                  <Mail size={18} className="text-accent" />
                  {company.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
