import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von KELES Maschinenbau, Augsburg.",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHeader
        title="Datenschutz"
        crumbs={[{ label: "Datenschutz" }]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-20">
          <div className="space-y-8 text-ink/80 leading-relaxed">
            <p className="text-sm text-ink/50">
              Diese Datenschutzerklärung ist eine Grundlage und sollte vor
              Veröffentlichung rechtlich geprüft bzw. an den tatsächlichen
              Einsatz (z. B. eingesetzte Dienste) angepasst werden.
            </p>

            <div>
              <h2 className="font-display font-bold uppercase text-lg text-ink mb-3">
                1. Verantwortlicher
              </h2>
              <p>
                {company.owner} – {company.name}
                <br />
                {company.address.street}, {company.address.zip}{" "}
                {company.address.city}
                <br />
                Telefon: {company.phone}
                <br />
                E-Mail: {company.email}
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold uppercase text-lg text-ink mb-3">
                2. Allgemeines zur Datenverarbeitung
              </h2>
              <p>
                Wir verarbeiten personenbezogene Daten nur, soweit dies zur
                Bereitstellung einer funktionsfähigen Website sowie unserer
                Inhalte und Leistungen erforderlich ist. Die Verarbeitung
                erfolgt auf Grundlage der geltenden Datenschutzgesetze (DSGVO,
                BDSG).
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold uppercase text-lg text-ink mb-3">
                3. Kontaktformular
              </h2>
              <p>
                Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen,
                werden Ihre Angaben aus dem Anfrageformular inklusive der von
                Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                Anfrage und für den Fall von Anschlussfragen bei uns
                gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b und f
                DSGVO.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold uppercase text-lg text-ink mb-3">
                4. Server-Logfiles
              </h2>
              <p>
                Der Provider der Seiten erhebt und speichert automatisch
                Informationen in sogenannten Server-Logfiles, die Ihr Browser
                automatisch übermittelt (z. B. Browsertyp, Betriebssystem,
                Referrer-URL, Uhrzeit der Serveranfrage). Diese Daten sind nicht
                bestimmten Personen zuordenbar.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold uppercase text-lg text-ink mb-3">
                5. Google Maps
              </h2>
              <p>
                Auf der Kontaktseite nutzen wir zur Darstellung unseres
                Standorts eine eingebettete Karte. Beim Aufruf können Daten an
                den Kartendienst übermittelt werden. Details richten sich nach
                der finalen Einbindung und sind ggf. anzupassen.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold uppercase text-lg text-ink mb-3">
                6. Ihre Rechte
              </h2>
              <p>
                Sie haben jederzeit das Recht auf Auskunft, Berichtigung,
                Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit
                und Widerspruch. Zudem steht Ihnen ein Beschwerderecht bei einer
                Aufsichtsbehörde zu.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
