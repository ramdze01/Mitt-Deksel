import { CreditCard, Printer, QrCode, Smartphone, Zap } from "lucide-react";
import { machineFeatures, siteContent } from "../data/siteContent";

// Ikoner og stiler kobles til funksjonene med samme index.
const featureIcons = [QrCode, CreditCard, Printer, Zap];
const featureIconStyles = [
  "bg-[#00D4FF]/18 text-primary ring-1 ring-[#00D4FF]/25",
  "bg-primary/10 text-primary",
  "bg-[#00D4FF]/18 text-primary ring-1 ring-[#00D4FF]/25",
  "bg-[#B6FF3B]/50 text-foreground ring-1 ring-[#B6FF3B]/60",
];

export function MachineSection() {
  return (
    <section id="machine" className="relative isolate scroll-mt-20 overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_18%_36%,rgba(11,16,32,0.06),transparent_34%),radial-gradient(circle_at_24%_42%,rgba(124,58,237,0.12),transparent_30%),radial-gradient(circle_at_82%_20%,rgba(0,212,255,0.09),transparent_26%),radial-gradient(circle_at_82%_86%,rgba(182,255,59,0.10),transparent_28%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div className="rounded-3xl bg-gradient-to-br from-primary/15 via-[#00D4FF]/20 to-[#B6FF3B]/20 p-8 ring-1 ring-primary/10">
            <div className="mx-auto flex aspect-[3/4] max-w-sm items-center justify-center">
              <div className="flex h-96 w-60 flex-col items-center justify-between rounded-[2rem] border-2 border-white/70 bg-white/70 px-6 py-7 shadow-xl backdrop-blur">
                <div className="flex h-40 w-full items-center justify-center rounded-2xl border border-[#00D4FF]/25 bg-white">
                  <Smartphone className="h-12 w-12 text-primary/70" />
                </div>
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-[#00D4FF]/30 bg-[#00D4FF]/15">
                  <QrCode className="h-12 w-12 text-primary" />
                </div>
                <div className="flex h-12 w-20 items-center justify-center rounded-xl bg-[#B6FF3B]/45">
                  <CreditCard className="h-6 w-6 text-foreground/70" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Maskinen
            </p>
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
              En selvbetjent maskin for personlige mobildeksler
            </h2>
            <p className="mb-5 leading-relaxed text-muted-foreground">
              Mitt Deksel er laget for kunder som allerede er på kjøpesenteret. De designer
              dekselet fra mobilen, betaler ved maskinen og får et fysisk deksel printet med
              én gang.
            </p>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              Kunden trenger ikke handle på nett, vente på frakt eller legge noe i en handlekurv.
              Alt skjer på stedet.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-3xl font-black text-primary">{siteContent.price}</p>
                <p className="text-xs text-muted-foreground">per deksel</p>
              </div>
              <div>
                <p className="text-3xl font-black text-primary">3 min</p>
                <p className="text-xs text-muted-foreground">ca. produksjon</p>
              </div>
              <div>
                <p className="text-3xl font-black text-primary">2</p>
                <p className="text-xs text-muted-foreground">mobilmerker</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Samme kort-komponent gjenbrukes for alle funksjonene fra datafilen. */}
          {machineFeatures.map((feature, index) => {
            const Icon = featureIcons[index] ?? Printer;

            return (
              <article
                key={feature.title}
                className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-[#00D4FF]/50"
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${featureIconStyles[index] ?? "bg-primary/10 text-primary"}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-bold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
