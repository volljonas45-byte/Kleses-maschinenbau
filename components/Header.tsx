"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { company, navItems } from "@/data/company";
import Logo from "@/components/Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menü beim Seitenwechsel schließen
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-ink/95 backdrop-blur-md border-b border-white/10"
          : "bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" aria-label="KELES Maschinenbau – Startseite">
            <Logo variant="light" height={38} />
          </Link>

          {/* Desktop-Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    active
                      ? "text-accent-light"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Rechts: Telefon + CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={company.phoneHref}
              className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              <Phone size={15} />
              {company.phone}
            </a>
            <Link
              href="/kontakt"
              className="bg-accent hover:bg-accent-dark text-white font-display font-semibold uppercase tracking-wide text-xs px-5 py-3 transition-colors"
            >
              Anfrage stellen
            </Link>
          </div>

          {/* Mobile-Burger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-white p-2 -mr-2"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile-Menü */}
      {open && (
        <div className="lg:hidden bg-ink border-t border-white/10">
          <nav className="mx-auto max-w-7xl px-5 py-4 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 text-white/85 hover:text-accent-light border-b border-white/5 text-base font-medium"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={company.phoneHref}
              className="py-3 flex items-center gap-2 text-white/85 text-base font-medium"
            >
              <Phone size={16} /> {company.phone}
            </a>
            <Link
              href="/kontakt"
              className="mt-3 bg-accent text-white text-center font-display font-semibold uppercase tracking-wide text-sm px-5 py-3.5"
            >
              Anfrage stellen
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
