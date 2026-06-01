import type { Metadata } from "next";
import Image from "next/image";
import { Target, Clock, Handshake, Sparkles, MapPin, Phone, Mail } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import ContactCTA from "@/components/ContactCTA";
import Reveal from "@/components/Reveal";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Über uns – KELES Maschinenbau aus Augsburg",
  description:
    "KELES Maschinenbau wurde 2015 von Ahmet Keles in Augsburg gegründet. Moderner Maschinenpark, erfahrenes Fachteam und persönliche Betreuung.",
};

const werte = [
  {
    icon: Target,
    title: "Qualität",
    text: "Enge Toleranzen, reproduzierbare Ergebnisse und lückenlose Qualitätskontrolle.",
  },
  {
    icon: Clock,
    title: "Zuverlässigkeit",
    text: "Termintreue ist für uns keine Option, sondern Standard.",
  },
  {
    icon: Handshake,
    title: "Partnerschaft",
    text: "Wir denken mit Ihnen mit und beraten Sie fair und offen.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    text: "Modernste Maschinen und Software für optimale Ergebnisse.",
  },
];

export default function UeberUnsPage() {
  const mapsQuery = encodeURIComponent(company.address.full);

  return (
    <>
      <PageHeader
        index="01"
        eyebrow="Über uns"
        title="Moderne Zerspanung mit Handschlagqualität"
        subtitle={`Gegründet ${company.founded} in Augsburg – ein Familienbetrieb mit dem Anspruch, für jeden Auftrag die beste Lösung zu finden.`}
        crumbs={[{ label: "Über uns" }]}
        image="/images/about/werkstatt-cnc.jpg"
      />

      {/* Geschichte */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Zwei Bilder gestapelt */}
            <Reveal>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] overflow-hidden mt-8">
                  <Image
                    src="/images/about/inhaber-cnc.jpg"
                    alt="Präzisionsfräser – Qualitätswerkzeug bei KELES Maschinenbau"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/about/werkstatt-cnc.jpg"
                    alt="CNC-Bearbeitung in der Werkstatt von KELES Maschinenbau"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <SectionHeading
                eyebrow="Unsere Geschichte"
                title="Präzision aus Augsburg"
              />
              <div className="mt-6 space-y-4 text-ink/70 leading-relaxed">
                <p>
                  KELES Maschinenbau wurde {company.founded} von{" "}
                  {company.owner} in Augsburg gegründet und hat sich seitdem als
                  verlässlicher Partner für Präzisionsbearbeitung in der Region
                  etabliert. Am Standort {company.address.street} betreiben wir
                  einen modernen Maschinenpark mit CNC-Fräszentren,
                  CNC-Drehzentren und einem 5-Achsen-Bearbeitungszentrum – alles
                  unterstützt durch aktuelle CAD-CAM-Software.
                </p>
                <p>
                  Unser Kundenstamm besteht hauptsächlich aus mittelständischen
                  und großen Unternehmen aus dem Großraum Augsburg und Bayern. Ob
                  Einzelteile, Prototypen oder Kleinserien – wir finden für jeden
                  Auftrag die wirtschaftlichste und technisch beste Lösung.
                </p>
                <p className="text-ink font-medium">
                  Was uns auszeichnet: der direkte Draht zum Chef. Bei uns
                  sprechen Sie nicht mit einem Callcenter, sondern direkt mit dem
                  Fachmann – kurze Entscheidungswege, schnelle Angebote,
                  persönliche Betreuung.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Kennzahlen */}
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {[
              { value: `seit ${company.founded}`, label: "am Markt" },
              { value: "5-Achsen", label: "Bearbeitung" },
              { value: "CAD-CAM", label: "Technologie" },
              { value: "1 – Serie", label: "Losgrößen" },
            ].map((stat) => (
              <div key={stat.label} className="bg-ink p-8 text-center">
                <div className="font-display font-extrabold uppercase text-2xl sm:text-3xl text-accent-light">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-white/60 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Werte */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-24">
          <SectionHeading
            index="02"
            eyebrow="Unsere Werte"
            title="Wofür wir stehen"
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {werte.map((w, i) => {
              const Icon = w.icon;
              return (
                <Reveal key={w.title} delay={i * 0.08}>
                  <div className="h-full bg-white border border-paper-dark p-7">
                    <div className="w-12 h-12 flex items-center justify-center bg-accent text-white mb-5">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-display font-bold uppercase text-lg text-ink">
                      {w.title}
                    </h3>
                    <p className="mt-3 text-sm text-ink/60 leading-relaxed">
                      {w.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Standort & Google Maps */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-24">
          <SectionHeading
            index="03"
            eyebrow="Standort"
            title="Wir sind in Augsburg"
            subtitle="Besuchen Sie uns in Augsburg-Lechhausen oder kontaktieren Sie uns – wir freuen uns auf Ihre Anfrage."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {/* Kontakt-Infos */}
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <span className="w-11 h-11 flex items-center justify-center bg-accent text-white shrink-0">
                  <MapPin size={20} />
                </span>
                <div>
                  <div className="font-display font-bold uppercase text-sm text-ink">Adresse</div>
                  <p className="mt-1 text-ink/70 leading-relaxed">
                    {company.address.street}<br />
                    {company.address.zip} {company.address.city}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-11 h-11 flex items-center justify-center bg-accent text-white shrink-0">
                  <Phone size={20} />
                </span>
                <div>
                  <div className="font-display font-bold uppercase text-sm text-ink">Telefon</div>
                  <a
                    href={company.phoneHref}
                    className="mt-1 block text-ink/70 hover:text-accent transition-colors"
                  >
                    {company.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-11 h-11 flex items-center justify-center bg-accent text-white shrink-0">
                  <Mail size={20} />
                </span>
                <div>
                  <div className="font-display font-bold uppercase text-sm text-ink">E-Mail</div>
                  <a
                    href={company.emailHref}
                    className="mt-1 block text-ink/70 hover:text-accent transition-colors break-all"
                  >
                    {company.email}
                  </a>
                </div>
              </div>

              <div className="mt-2 border-t border-paper-dark pt-5">
                <div className="font-display font-bold uppercase text-sm text-ink mb-2">
                  Öffnungszeiten
                </div>
                <p className="text-ink/70 text-sm">{company.openingHours}</p>
              </div>
            </div>

            {/* Google Maps – 2/3 Breite */}
            <div className="lg:col-span-2 overflow-hidden border border-paper-dark">
              <iframe
                title="Standort KELES Maschinenbau Augsburg auf Google Maps"
                src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
