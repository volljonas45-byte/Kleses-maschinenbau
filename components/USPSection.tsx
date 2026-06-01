import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { usps } from "@/data/usps";

export default function USPSection() {
  return (
    <section className="relative bg-accent text-white overflow-hidden">
      {/* dezentes Raster im Hintergrund */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
        <SectionHeading
          index="05"
          eyebrow="Warum KELES"
          title={
            <>
              Ihr verlässlicher
              <br />
              Fertigungspartner
            </>
          }
          subtitle="Was uns auszeichnet: der direkte Draht zum Fachmann, kompromisslose Qualität und Termine, auf die Sie sich verlassen können."
          dark
        />

        <div className="mt-14 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((usp, i) => {
            const Icon = usp.icon;
            return (
              <Reveal key={usp.title} delay={i * 0.08} className="h-full">
                <div className="h-full bg-accent p-8 flex flex-col">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/15 mb-6">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display font-bold uppercase text-lg">
                    {usp.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/80 leading-relaxed">
                    {usp.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
