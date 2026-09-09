import { ArrowRight, Check, CreditCard, MapPin, Monitor, QrCode, Star } from "lucide-react";
import { AnimatedHeroBackground } from "./AnimatedHeroBackground";
import { siteContent } from "../data/siteContent";

function MachinePreview() {
  // Dette er bare en visuell illustrasjon av maskinen, bygget med vanlige div-er og ikoner.
  return (
    <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-primary/15 via-[#00D4FF]/20 to-[#B6FF3B]/25 p-6 shadow-sm ring-1 ring-primary/10 lg:max-w-none">
      <div className="absolute right-8 top-8 h-28 w-28 rounded-full bg-[#B6FF3B]/30 blur-3xl" />
      <div className="absolute bottom-8 left-8 h-32 w-32 rounded-full bg-[#00D4FF]/25 blur-3xl" />
      <div className="mx-auto flex aspect-[4/5] max-w-sm items-center justify-center">
        <div className="relative flex h-80 w-52 flex-col items-center justify-between rounded-[2rem] border-2 border-white/70 bg-white/70 px-5 py-6 shadow-xl backdrop-blur">
          <div className="flex h-36 w-full items-center justify-center rounded-2xl border border-[#00D4FF]/25 bg-white">
            <Monitor className="h-12 w-12 text-primary/70" />
          </div>
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-[#00D4FF]/30 bg-[#00D4FF]/15">
            <QrCode className="h-11 w-11 text-primary" />
          </div>
          <div className="flex h-11 w-16 items-center justify-center rounded-xl bg-[#B6FF3B]/45">
            <CreditCard className="h-6 w-6 text-foreground/70" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/70 bg-background/95 p-4 shadow-xl backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#B6FF3B] bg-[#B6FF3B]/80">
            <Check className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-bold">Dekselet er klart</p>
            <p className="text-xs text-muted-foreground">Produsert på ca. 3 minutter</p>
          </div>
          <span className="ml-auto text-sm font-bold text-primary">{siteContent.price}</span>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  // Hele hero-seksjonen legges inni komponenten som lager den animerte Vanta-bakgrunnen.
  return (
    <AnimatedHeroBackground>
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-2 lg:pb-24 lg:pt-24">
        <div className="text-white">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#B6FF3B]/70 bg-[#B6FF3B]/15 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(182,255,59,0.18)] backdrop-blur">
            <Star className="h-4 w-4 fill-[#B6FF3B] text-[#B6FF3B]" />
            Personlig deksel på kjøpesenteret
          </div>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Lag ditt eget mobildeksel på{" "}
            <span className="text-[#B6FF3B]">{siteContent.productionTime}</span>
          </h1>

          <p className="mb-9 max-w-xl text-lg leading-relaxed text-slate-200">
            Gå til en Mitt Deksel-maskin, velg telefonmodell, scan QR-koden og last opp bildet
            fra mobilen. Maskinen printer dekselet på stedet. Dette er ikke en nettbutikk.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-[0_18px_38px_rgba(124,58,237,0.42),0_0_38px_rgba(0,212,255,0.28),0_0_20px_rgba(182,255,59,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_52px_rgba(124,58,237,0.56),0_0_66px_rgba(0,212,255,0.44),0_0_34px_rgba(182,255,59,0.26)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00D4FF]/45 active:translate-y-0"
            >
              Se hvordan det fungerer
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#locations"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/95 px-7 py-4 text-base font-semibold text-primary shadow-sm transition-colors hover:border-[#00D4FF] hover:bg-white"
            >
              <MapPin className="h-5 w-5" />
              Finn nærmeste maskin
            </a>
          </div>
        </div>

        <MachinePreview />
      </div>
    </AnimatedHeroBackground>
  );
}
