import { Building2, Mail, MapPin } from "lucide-react";
import { contactInfo } from "../data/siteContent";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Kontakt
            </p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Spørsmål om Mitt Deksel?
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Ta kontakt hvis du lurer på hvordan maskinen fungerer, hvilke modeller som
              støttes, eller om du ønsker en maskin på ditt kjøpesenter.
            </p>
          </div>

          <div className="grid gap-5 lg:col-span-3 sm:grid-cols-2">
            <article className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00D4FF]/15">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Generelle spørsmål</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Bruk e-post for spørsmål om produkt, pris og maskiner.
              </p>
              {/* mailto åpner brukerens standard e-postprogram med adressen ferdig utfylt. */}
              <a className="font-semibold text-primary hover:underline" href={`mailto:${contactInfo.email}`}>
                {contactInfo.email}
              </a>
            </article>

            <article className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B6FF3B]/30">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Kjøpesenter og partnere</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Interessert i å ha en Mitt Deksel-maskin på ditt senter?
              </p>
              <a className="font-semibold text-primary hover:underline" href={`mailto:${contactInfo.partnerEmail}`}>
                {contactInfo.partnerEmail}
              </a>
            </article>

            <article className="rounded-2xl bg-gradient-to-br from-primary to-foreground p-6 text-primary-foreground sm:col-span-2">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B6FF3B]/20">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Ingen nettbutikk eller betaling på nettsiden</h3>
              <p className="max-w-2xl text-sm leading-relaxed text-primary-foreground/75">
                Nettsiden forklarer konseptet og viser hvor maskinene finnes. Selve designet,
                betalingen og produksjonen skjer ved den fysiske maskinen på kjøpesenteret.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
