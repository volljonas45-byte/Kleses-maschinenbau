import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import BranchenGrid from "@/components/BranchenGrid";
import USPSection from "@/components/USPSection";
import ProcessSection from "@/components/ProcessSection";
import GalleryGrid from "@/components/GalleryGrid";
import ContactCTA from "@/components/ContactCTA";
import Reveal from "@/components/Reveal";
import { services } from "@/data/services";
import { company } from "@/data/company";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />

      {/* 02 – Über uns kurz */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading
                index="02"
                eyebrow="Über uns"
                title={
                  <>
                    Moderne Zerspanung
                    <br />
                    mit Handschlag-
                    <br />
                    qualität
                  </>
                }
              />
              <p className="mt-6 text-ink/70 leading-relaxed">
                KELES Maschinenbau steht für moderne Zerspanungstechnik und
                persönlichen Service. Seit {company.founded} fertigen wir
                Präzisionsteile für mittelständische und große Unternehmen aus
                Augsburg und der Region – mit modernsten CNC-Bearbeitungszentren,
                CAD-CAM-Technologie und einem erfahrenen Fachteam.
              </p>
              <ul className="mt-7 space-y-3">
                {[
                  "Gegründet 2015 in Augsburg",
                  "5-Achsen-Bearbeitung & CAD-CAM",
                  "Vom Einzelteil bis zur Kleinserie",
                  "Direkter Ansprechpartner",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-ink/80">
                    <span className="flex items-center justify-center w-5 h-5 bg-accent/10 text-accent shrink-0">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/ueber-uns"
                className="mt-9 inline-flex items-center gap-2 font-display font-semibold uppercase tracking-wide text-sm text-accent hover:gap-3 transition-all"
              >
                Mehr über uns <ArrowRight size={18} />
              </Link>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] overflow-hidden mt-8">
                  <Image
                    src="/images/about/inhaber-cnc.jpg"
                    alt="Fachmann an der CNC-Maschine"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/about/werkstatt-cnc.jpg"
                    alt="Werkstatt von KELES Maschinenbau"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 03 – Leistungen */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <SectionHeading
              index="03"
              eyebrow="Unsere Leistungen"
              title={
                <>
                  Was wir
                  <br />
                  für Sie fertigen
                </>
              }
            />
            <Link
              href="/leistungen"
              className="inline-flex items-center gap-2 font-display font-semibold uppercase tracking-wide text-sm text-accent hover:gap-3 transition-all shrink-0"
            >
              Alle Leistungen <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.06}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 – Branchen */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
          <SectionHeading
            index="04"
            eyebrow="Branchen"
            title={
              <>
                Industrien, die
                <br />
                auf uns bauen
              </>
            }
            subtitle="Von Maschinenbau bis Medizintechnik – wir fertigen Präzisionsteile für die anspruchsvollsten Branchen."
          />
          <div className="mt-12">
            <BranchenGrid />
          </div>
        </div>
      </section>

      {/* 05 – Warum KELES (blau) */}
      <USPSection />

      {/* 06 – Prozess */}
      <ProcessSection />

      {/* 07 – Galerie-Teaser */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <SectionHeading
              index="08"
              eyebrow="Einblicke"
              title="Aus der Werkstatt"
            />
            <Link
              href="/galerie"
              className="inline-flex items-center gap-2 font-display font-semibold uppercase tracking-wide text-sm text-accent hover:gap-3 transition-all shrink-0"
            >
              Zur Galerie <ArrowRight size={18} />
            </Link>
          </div>
          <div className="mt-12">
            <GalleryGrid
              images={[1, 2, 3, 4].map((i) => `/images/galerie/g${i}.jpg`)}
            />
          </div>
        </div>
      </section>

      {/* 07 – Kontakt CTA */}
      <ContactCTA />
    </>
  );
}
