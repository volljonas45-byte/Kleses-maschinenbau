import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import ContactCTA from "@/components/ContactCTA";
import Reveal from "@/components/Reveal";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Leistungen – CNC-Fräsen, Drehen & 5-Achsen",
  description:
    "CNC-Fräsen, CNC-Drehen, 5-Achsen-Bearbeitung, Kleinserien- und Prototypenfertigung bei KELES Maschinenbau in Augsburg. Moderne Maschinen, CAD-CAM-Technologie.",
};

export default function LeistungenPage() {
  return (
    <>
      <PageHeader
        index="01"
        eyebrow="Leistungen"
        title="Präzisionsfertigung auf höchstem Niveau"
        subtitle="Von der CNC-Bearbeitung über 5-Achsen-Fertigung bis zur Kleinserie – wir setzen Ihre Anforderungen in präzise Bauteile um."
        crumbs={[{ label: "Leistungen" }]}
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-24">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.06}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
