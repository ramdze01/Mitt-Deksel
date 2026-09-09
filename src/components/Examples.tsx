import { Image, MapPin, Smartphone } from "lucide-react";
import { exampleCases } from "../data/siteContent";

export function Examples() {
  return (
    <section id="examples" className="relative isolate scroll-mt-20 overflow-hidden bg-muted py-20">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_14%_28%,rgba(0,212,255,0.10),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(124,58,237,0.10),transparent_32%),radial-gradient(circle_at_50%_96%,rgba(182,255,59,0.11),transparent_30%),linear-gradient(180deg,rgba(248,250,252,0),rgba(255,255,255,0.52))]" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Eksempler
          </p>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Lag et deksel som føles personlig
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Bruk et bilde fra mobilen, et grafisk motiv eller et enkelt design. Dette er
            eksempler på uttrykk kunden kan lage ved maskinen.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {/* Fargegradienten ligger i datafilen og settes som inline background her. */}
          {exampleCases.map((example) => (
            <article key={example.name} className="group">
              <div
                className="relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-2xl shadow-sm"
                style={{ background: example.gradient }}
              >
                <div className="flex h-32 w-20 items-center justify-center rounded-2xl border-2 border-white/45 bg-white/25 shadow-inner backdrop-blur">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <div className="absolute inset-x-3 bottom-3 rounded-full bg-black/30 px-3 py-2 text-center text-xs font-semibold text-white backdrop-blur">
                  {example.name}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-background p-8 text-center shadow-sm ring-1 ring-border">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00D4FF]/15">
            <Image className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mb-3 text-2xl font-extrabold">Bildet lastes opp ved maskinen</h3>
          <p className="mx-auto mb-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Kunden scanner QR-koden på skjermen, velger bilde fra mobilen og ser en
            forhåndsvisning før betaling.
          </p>
          <a
            href="#locations"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <MapPin className="h-4 w-4" />
            Finn en maskin
          </a>
        </div>
      </div>
    </section>
  );
}
