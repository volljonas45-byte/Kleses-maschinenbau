import { NextResponse } from "next/server";
import { company } from "@/data/company";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const form = await request.formData();

    // Honeypot: ist dieses Feld ausgefüllt, ist es Spam
    if (form.get("website")) {
      return NextResponse.json({ ok: true });
    }

    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const firma = String(form.get("firma") ?? "").trim();
    const telefon = String(form.get("telefon") ?? "").trim();
    const nachricht = String(form.get("nachricht") ?? "").trim();
    const datei = form.get("datei");
    const dateiName =
      datei && typeof datei === "object" && "name" in datei
        ? (datei as File).name
        : "";

    if (!name || !email || !nachricht) {
      return NextResponse.json(
        { ok: false, error: "Pflichtfelder fehlen." },
        { status: 400 }
      );
    }

    const subject = `Neue Anfrage über die Website von ${name}`;
    const text = [
      `Name: ${name}`,
      `Firma: ${firma || "-"}`,
      `E-Mail: ${email}`,
      `Telefon: ${telefon || "-"}`,
      dateiName ? `Anhang: ${dateiName}` : "Anhang: -",
      "",
      "Nachricht:",
      nachricht,
    ].join("\n");

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL || company.email;
    const from = process.env.CONTACT_FROM_EMAIL;

    // Versand nur, wenn konfiguriert. Andernfalls Anfrage serverseitig loggen.
    if (apiKey && from) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: email,
          subject,
          text,
        }),
      });
      if (!res.ok) {
        const detail = await res.text();
        console.error("Resend-Fehler:", detail);
        return NextResponse.json(
          { ok: false, error: "Versand fehlgeschlagen." },
          { status: 502 }
        );
      }
    } else {
      // Kein Mailversand konfiguriert – Anfrage wird (vorerst) nur protokolliert.
      console.info("[Kontaktanfrage – Mailversand nicht konfiguriert]\n" + text);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Kontaktformular-Fehler:", err);
    return NextResponse.json(
      { ok: false, error: "Serverfehler." },
      { status: 500 }
    );
  }
}
