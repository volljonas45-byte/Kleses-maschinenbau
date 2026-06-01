import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import GalleryGrid from "@/components/GalleryGrid";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Galerie – Einblicke in unsere Fertigung",
  description:
    "Einblicke in die Werkstatt und die Präzisionsteile von KELES Maschinenbau in Augsburg – CNC-Fräsen, Drehen und 5-Achsen-Bearbeitung.",
};

export default function GaleriePage() {
  const images = [1, 2, 3, 4, 5, 6, 7, 8].map((i) => `/images/galerie/g${i}.jpg`);
  return (
    <>
      <PageHeader
        index="01"
        eyebrow="Galerie"
        title="Einblicke aus der Werkstatt"
        subtitle="Ein Blick auf unsere Maschinen, Prozesse und gefertigten Präzisionsteile."
        crumbs={[{ label: "Galerie" }]}
        image="/images/galerie/g3.jpg"
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-24">
          <GalleryGrid images={images} />
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
