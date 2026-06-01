import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/leistungen/${service.slug}`}
      className="group relative flex flex-col bg-white border border-paper-dark overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-xl hover:shadow-ink/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
        <div className="absolute top-4 left-4 bg-accent text-white p-2.5">
          <Icon size={20} />
        </div>
      </div>
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display font-bold uppercase text-lg text-ink group-hover:text-accent transition-colors">
            {service.title}
          </h3>
          <ArrowUpRight
            size={20}
            className="text-ink/30 group-hover:text-accent transition-colors shrink-0 mt-1"
          />
        </div>
        <p className="mt-3 text-sm text-ink/60 leading-relaxed">
          {service.short}
        </p>
      </div>
    </Link>
  );
}
