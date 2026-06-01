import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactCTA from "@/components/ContactCTA";
import { services, getService } from "@/data/services";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.seoDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow="Leistung"
        title={service.title}
        subtitle={service.short}
        image={service.image}
        crumbs={[
          { label: "Leistungen", href: "/leistungen" },
          { label: service.title },
        ]}
      />

      {/* Inhalt */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <span className="h-px w-10 bg-accent" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
                  Im Detail
                </span>
              </div>
              <h2 className="font-display font-extrabold uppercase text-3xl sm:text-4xl text-ink leading-tight">
                {service.title}
              </h2>
              <p className="mt-6 text-ink/70 leading-relaxed text-lg">
                {service.intro}
              </p>

              <h3 className="mt-10 font-display font-bold uppercase text-sm tracking-wide text-ink">
                Ihre Vorteile
              </h3>
              <ul className="mt-5 space-y-4">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-ink/80">
                    <span className="flex items-center justify-center w-6 h-6 bg-accent text-white shrink-0 mt-0.5">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/kontakt"
                className="mt-10 inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-display font-semibold uppercase tracking-wide text-sm px-7 py-4 transition-colors"
              >
                Jetzt anfragen <ArrowRight size={18} />
              </Link>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden lg:sticky lg:top-28">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Weitere Leistungen */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
          <h2 className="font-display font-extrabold uppercase text-2xl sm:text-3xl text-ink mb-10">
            Weitere Leistungen
          </h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {others.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={`/leistungen/${s.slug}`}
                  className="group bg-white border border-paper-dark p-6 hover:border-accent transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 flex items-center justify-center bg-accent/10 text-accent">
                      <Icon size={22} />
                    </div>
                    <ArrowRight
                      size={18}
                      className="text-ink/30 group-hover:text-accent group-hover:translate-x-1 transition-all"
                    />
                  </div>
                  <h3 className="mt-5 font-display font-bold uppercase text-base text-ink group-hover:text-accent transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink/60 leading-relaxed">
                    {s.short}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
