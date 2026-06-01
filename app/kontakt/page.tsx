import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Kontakt – KELES Maschinenbau Augsburg",
  description: `KELES Maschinenbau kontaktieren – ${company.address.full}. Tel: ${company.phone}. Schnelle Reaktionszeiten, direkter Ansprechpartner.`,
};

export default function KontaktPage() {
  const mapsQuery = encodeURIComponent(company.address.full);

  return (
    <>
      <PageHeader
        index="01"
        eyebrow="Kontakt"
        title="Sprechen Sie mit uns"
        subtitle="Ob Anfrage, Angebot oder technische Frage – wir antworten schnell und unkompliziert. Senden Sie uns gerne direkt Ihre Zeichnung."
        crumbs={[{ label: "Kontakt" }]}
        image="/images/leistungen/cnc-drehen.jpg"
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Kontaktdaten */}
            <div className="lg:col-span-2">
              <h2 className="font-display font-extrabold uppercase text-2xl text-ink">
                Kontaktdaten
              </h2>
              <p className="mt-4 text-ink/60 leading-relaxed">
                Sie erreichen uns telefonisch, per E-Mail oder über das
                Formular. Wir freuen uns auf Ihre Anfrage.
              </p>

              <ul className="mt-8 space-y-6">
                <li className="flex items-start gap-4">
                  <span className="w-11 h-11 flex items-center justify-center bg-accent text-white shrink-0">
                    <MapPin size={20} />
                  </span>
                  <div>
                    <div className="font-display font-bold uppercase text-sm text-ink">
                      Adresse
                    </div>
                    <p className="mt-1 text-ink/70">
                      {company.address.street}
                      <br />
                      {company.address.zip} {company.address.city}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-11 h-11 flex items-center justify-center bg-accent text-white shrink-0">
                    <Phone size={20} />
                  </span>
                  <div>
                    <div className="font-display font-bold uppercase text-sm text-ink">
                      Telefon
                    </div>
                    <a
                      href={company.phoneHref}
                      className="mt-1 block text-ink/70 hover:text-accent transition-colors"
                    >
                      {company.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-11 h-11 flex items-center justify-center bg-accent text-white shrink-0">
                    <Mail size={20} />
                  </span>
                  <div>
                    <div className="font-display font-bold uppercase text-sm text-ink">
                      E-Mail
                    </div>
                    <a
                      href={company.emailHref}
                      className="mt-1 block text-ink/70 hover:text-accent transition-colors break-all"
                    >
                      {company.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-11 h-11 flex items-center justify-center bg-accent text-white shrink-0">
                    <Clock size={20} />
                  </span>
                  <div>
                    <div className="font-display font-bold uppercase text-sm text-ink">
                      Öffnungszeiten
                    </div>
                    <p className="mt-1 text-ink/70">{company.openingHours}</p>
                  </div>
                </li>
              </ul>

              {/* Karte */}
              <div className="mt-8 aspect-[4/3] overflow-hidden border border-paper-dark">
                <iframe
                  title="Standort KELES Maschinenbau auf Google Maps"
                  src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                />
              </div>
            </div>

            {/* Formular */}
            <div className="lg:col-span-3">
              <h2 className="font-display font-extrabold uppercase text-2xl text-ink mb-6">
                Anfrage senden
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
