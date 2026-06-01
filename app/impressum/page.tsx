import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von KELES Maschinenbau, Augsburg.",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHeader title="Impressum" crumbs={[{ label: "Impressum" }]} />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-20 prose-legal">
          <div className="space-y-8 text-ink/80 leading-relaxed">
            <div>
              <h2 className="font-display font-bold uppercase text-lg text-ink mb-3">
                Angaben gemäß § 5 TMG
              </h2>
              <p>
                {company.owner}
                <br />
                {company.name}
                <br />
                {company.address.street}
                <br />
                {company.address.zip} {company.address.city}
                <br />
                {company.address.country}
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold uppercase text-lg text-ink mb-3">
                Kontakt
              </h2>
              <p>
                Telefon: {company.phone}
                <br />
                E-Mail: {company.email}
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold uppercase text-lg text-ink mb-3">
                Umsatzsteuer-ID
              </h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27a
                Umsatzsteuergesetz:
                <br />
                <span className="text-ink/50">[wird ergänzt]</span>
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold uppercase text-lg text-ink mb-3">
                Zuständige Kammer
              </h2>
              <p className="text-ink/50">[Handwerkskammer / IHK Schwaben – wird ergänzt]</p>
            </div>

            <div>
              <h2 className="font-display font-bold uppercase text-lg text-ink mb-3">
                Verbraucherstreitbeilegung
              </h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                . Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                teilzunehmen.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold uppercase text-lg text-ink mb-3">
                Haftung für Inhalte
              </h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
