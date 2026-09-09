import { Clock, MapPin } from "lucide-react";
import { locations } from "../data/locations";

export function Locations() {
  return (
    <section id="locations" className="scroll-mt-20 bg-muted py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Lokasjoner
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Finn en Mitt Deksel-maskin
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Maskinene står på kjøpesentre. Adresse og åpningstider bør bekreftes før siden
            publiseres.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Lokasjonene ligger i en egen datafil, mens denne komponenten bestemmer hvordan de vises. */}
          {locations.map((location) => (
            <article
              key={location.id}
              className="overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md"
            >
              <div className="flex h-32 items-center justify-center bg-gradient-to-br from-primary/15 via-[#00D4FF]/15 to-[#B6FF3B]/20">
                <div className="text-center">
                  <MapPin className="mx-auto mb-2 h-8 w-8 text-primary" />
                  <p className="text-sm font-semibold text-muted-foreground">{location.name}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold">{location.name}</h3>
                    <p className="text-sm font-semibold text-primary">{location.area}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-[#B6FF3B]/70 bg-[#B6FF3B]/55 px-3 py-1 text-xs font-semibold text-foreground">
                    {location.status}
                  </span>
                </div>

                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#00D4FF]" />
                    <span>{location.address}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
                    <span>{location.openingHours}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
