import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import BranchenGrid from "@/components/BranchenGrid";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Branchen – für die anspruchsvollsten Industrien",
  description:
    "KELES Maschinenbau fertigt Präzisionsteile für Maschinenbau, Automotive, Halbleiter, Luft- & Raumfahrt und Medizintechnik in Augsburg.",
};

export default function BranchenPage() {
  return (
    <>
      <PageHeader
        index="01"
        eyebrow="Branchen"
        title="Industrien, die auf uns bauen"
        subtitle="Unsere Kunden sind mittelständische und große Unternehmen aus den unterschiedlichsten Branchen – sie alle verbindet der Anspruch an Präzision und Zuverlässigkeit."
        crumbs={[{ label: "Branchen" }]}
        image="/images/branchen/maschinenbau.jpg"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-24">
          <BranchenGrid />
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
