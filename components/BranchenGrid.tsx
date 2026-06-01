import Image from "next/image";
import { branchen } from "@/data/branchen";

export default function BranchenGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {branchen.map((b) => (
        <div
          key={b.title}
          className="group relative aspect-[4/3] overflow-hidden bg-ink"
        >
          <Image
            src={b.image}
            alt={b.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover opacity-60 transition-all duration-500 group-hover:opacity-40 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <h3 className="font-display font-bold uppercase text-lg text-white">
              {b.title}
            </h3>
            <p className="mt-2 text-sm text-white/0 max-h-0 group-hover:max-h-24 group-hover:text-white/75 overflow-hidden transition-all duration-300">
              {b.description}
            </p>
            <span className="mt-3 h-0.5 w-10 bg-accent" />
          </div>
        </div>
      ))}
    </div>
  );
}
