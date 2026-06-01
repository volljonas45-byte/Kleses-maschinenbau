import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

type PageHeaderProps = {
  index?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  crumbs?: Crumb[];
};

export default function PageHeader({
  index,
  eyebrow,
  title,
  subtitle,
  image = "/images/hero/hero.jpg",
  crumbs = [],
}: PageHeaderProps) {
  return (
    <section className="relative bg-ink overflow-hidden">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/60" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-36 pb-16 sm:pt-40 sm:pb-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-white/50 mb-6">
          <Link href="/" className="hover:text-white transition-colors">
            Start
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-2">
              <ChevronRight size={13} />
              {c.href ? (
                <Link href={c.href} className="hover:text-white transition-colors">
                  {c.label}
                </Link>
              ) : (
                <span className="text-white/80">{c.label}</span>
              )}
            </span>
          ))}
        </nav>

        {(index || eyebrow) && (
          <div className="flex items-center gap-4 mb-5">
            {index && (
              <span className="section-index text-accent-light font-bold text-sm">
                {index}
              </span>
            )}
            {eyebrow && (
              <>
                <span className="h-px w-10 bg-accent" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                  {eyebrow}
                </span>
              </>
            )}
          </div>
        )}

        <h1 className="font-display font-extrabold uppercase text-white leading-[0.92] text-4xl sm:text-6xl max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
