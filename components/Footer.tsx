import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { company, navItems } from "@/data/company";
import { services } from "@/data/services";
import Logo from "@/components/Logo";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="KELES Maschinenbau – Startseite">
              <Logo variant="light" height={44} />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-white/60 max-w-xs">
              {company.shortDescription}
            </p>
            <a
              href={company.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-white/70 hover:text-accent-light transition-colors"
            >
              <InstagramIcon /> {company.instagram}
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-bold uppercase text-sm tracking-wide text-white mb-5">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-accent-light transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="font-display font-bold uppercase text-sm tracking-wide text-white mb-5">
              Leistungen
            </h3>
            <ul className="space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/leistungen/${s.slug}`}
                    className="hover:text-accent-light transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-display font-bold uppercase text-sm tracking-wide text-white mb-5">
              Kontakt
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={17} className="mt-0.5 text-accent shrink-0" />
                <span>
                  {company.address.street}
                  <br />
                  {company.address.zip} {company.address.city}
                </span>
              </li>
              <li>
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-3 hover:text-accent-light transition-colors"
                >
                  <Phone size={17} className="text-accent shrink-0" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={company.emailHref}
                  className="flex items-center gap-3 hover:text-accent-light transition-colors"
                >
                  <Mail size={17} className="text-accent shrink-0" />
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Unterzeile */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {year} {company.name} · {company.owner}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/impressum" className="hover:text-white transition-colors">
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="hover:text-white transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
