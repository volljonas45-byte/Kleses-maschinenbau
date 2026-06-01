"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle, Paperclip } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [fileName, setFileName] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
      setFileName("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white border border-paper-dark p-8 sm:p-10 text-center">
        <div className="mx-auto w-14 h-14 flex items-center justify-center bg-accent/10 text-accent mb-5">
          <CheckCircle2 size={30} />
        </div>
        <h3 className="font-display font-bold uppercase text-xl text-ink">
          Vielen Dank!
        </h3>
        <p className="mt-3 text-ink/60">
          Ihre Anfrage ist eingegangen. Wir melden uns schnellstmöglich bei
          Ihnen.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-accent hover:underline"
        >
          Weitere Anfrage senden
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full bg-paper border border-paper-dark px-4 py-3 text-ink placeholder:text-ink/40 focus:outline-none focus:border-accent transition-colors";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-paper-dark p-6 sm:p-8 space-y-5"
    >
      {/* Honeypot (Spam-Schutz) – für Menschen unsichtbar */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label>
          Bitte nicht ausfüllen
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-ink mb-2">
            Name *
          </label>
          <input
            type="text"
            name="name"
            required
            className={inputClass}
            placeholder="Ihr Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink mb-2">
            Firma
          </label>
          <input
            type="text"
            name="firma"
            className={inputClass}
            placeholder="Ihr Unternehmen"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-ink mb-2">
            E-Mail *
          </label>
          <input
            type="email"
            name="email"
            required
            className={inputClass}
            placeholder="name@firma.de"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink mb-2">
            Telefon
          </label>
          <input
            type="tel"
            name="telefon"
            className={inputClass}
            placeholder="+49 …"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-ink mb-2">
          Nachricht *
        </label>
        <textarea
          name="nachricht"
          required
          rows={5}
          className={`${inputClass} resize-y`}
          placeholder="Beschreiben Sie Ihr Projekt – Stückzahl, Material, Toleranzen …"
        />
      </div>

      {/* Datei-Upload */}
      <div>
        <label className="block text-sm font-medium text-ink mb-2">
          Zeichnung / CAD-Datei (optional)
        </label>
        <label className="flex items-center gap-3 bg-paper border border-dashed border-paper-dark px-4 py-3 cursor-pointer hover:border-accent transition-colors">
          <Paperclip size={18} className="text-accent" />
          <span className="text-sm text-ink/60">
            {fileName || "Datei auswählen (PDF, STEP, DXF …)"}
          </span>
          <input
            type="file"
            name="datei"
            className="hidden"
            accept=".pdf,.step,.stp,.iges,.igs,.dxf,.dwg,.zip,.png,.jpg"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
          />
        </label>
      </div>

      {/* DSGVO */}
      <label className="flex items-start gap-3 text-sm text-ink/70">
        <input
          type="checkbox"
          name="datenschutz"
          required
          className="mt-1 w-4 h-4 accent-[var(--color-accent)]"
        />
        <span>
          Ich habe die{" "}
          <a href="/datenschutz" className="text-accent hover:underline">
            Datenschutzerklärung
          </a>{" "}
          gelesen und stimme der Verarbeitung meiner Daten zu. *
        </span>
      </label>

      {status === "error" && (
        <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-200 px-4 py-3">
          <AlertCircle size={18} />
          Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder
          rufen Sie uns an.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent-dark disabled:opacity-60 text-white font-display font-semibold uppercase tracking-wide text-sm px-7 py-4 transition-colors"
      >
        {status === "loading" ? (
          "Wird gesendet …"
        ) : (
          <>
            Anfrage senden <Send size={17} />
          </>
        )}
      </button>
    </form>
  );
}
