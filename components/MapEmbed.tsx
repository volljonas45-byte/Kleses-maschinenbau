import { MapPin, ExternalLink } from "lucide-react";
import { company } from "@/data/company";

type MapEmbedProps = {
  className?: string;
  height?: string;
};

export default function MapEmbed({
  className = "",
  height = "400px",
}: MapEmbedProps) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address.full)}`;

  return (
    <div className={`relative overflow-hidden border border-paper-dark ${className}`}>
      <iframe
        title="Standort KELES Maschinenbau"
        src="https://maps.google.com/maps?q=Am+Mittleren+Moos+20,+86167+Augsburg,+Deutschland&t=m&z=16&output=embed&iwloc=near"
        width="100%"
        style={{ height, border: 0, display: "block" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Info-Overlay */}
      <div className="absolute bottom-4 left-4 bg-ink/90 backdrop-blur-sm text-white text-sm px-4 py-3 flex items-start gap-3 max-w-[calc(100%-2rem)] shadow-xl">
        <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
        <div>
          <div className="font-display font-bold uppercase text-xs tracking-wide text-accent-light mb-1">
            KELES Maschinenbau
          </div>
          <div className="text-white/80 text-xs leading-relaxed">
            {company.address.street}, {company.address.zip} {company.address.city}
          </div>
        </div>
      </div>

      {/* Link overlay */}
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-3 right-3 bg-white/90 hover:bg-white text-ink p-2 shadow-md transition-colors"
        title="In Google Maps öffnen"
      >
        <ExternalLink size={15} />
      </a>
    </div>
  );
}
