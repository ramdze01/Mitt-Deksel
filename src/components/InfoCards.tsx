import { CreditCard, Smartphone, Zap } from "lucide-react";
import { infoCards } from "../data/siteContent";

// Disse to listene følger samme rekkefølge som infoCards i datafilen.
const icons = [CreditCard, Zap, Smartphone, Smartphone];
const iconStyles = [
  "bg-primary/10 text-primary",
  "bg-[#B6FF3B]/50 text-foreground ring-1 ring-[#B6FF3B]/60",
  "bg-[#00D4FF]/18 text-primary ring-1 ring-[#00D4FF]/25",
  "bg-[#00D4FF]/18 text-primary ring-1 ring-[#00D4FF]/25",
];

export function InfoCards() {
  return (
    <section className="bg-muted py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* map() lager ett kort for hvert objekt i infoCards. */}
          {infoCards.map((card, index) => {
            const Icon = icons[index] ?? Smartphone;

            return (
              <article
                key={card.title}
                className="rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
              >
                <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${iconStyles[index] ?? "bg-primary/10 text-primary"}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mb-2 text-lg font-bold leading-snug">{card.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
