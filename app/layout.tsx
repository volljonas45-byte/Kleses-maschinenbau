import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { company } from "@/data/company";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: "KELES Maschinenbau – CNC-Fräsen & Drehen in Augsburg",
    template: "%s | KELES Maschinenbau",
  },
  description:
    "KELES Maschinenbau in Augsburg – Ihr Spezialist für CNC-Fräsen, CNC-Drehen und 5-Achsen-Bearbeitung. Einzelteile und Kleinserien in höchster Qualität.",
  keywords: [
    "CNC Fräsen Augsburg",
    "CNC Drehen Augsburg",
    "Maschinenbau Augsburg",
    "5-Achsen-Bearbeitung",
    "Zerspanung Augsburg",
    "Kleinserienfertigung",
    "Prototypen Augsburg",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "KELES Maschinenbau",
    title: "KELES Maschinenbau – CNC-Fräsen & Drehen in Augsburg",
    description:
      "Ihr Spezialist für CNC-Fräsen, CNC-Drehen und 5-Achsen-Bearbeitung. Vom Prototyp bis zur Kleinserie.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      data-scroll-behavior="smooth"
      className={`${archivo.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
