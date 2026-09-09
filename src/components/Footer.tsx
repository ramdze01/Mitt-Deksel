import { Printer } from "lucide-react";
import { navItems, siteContent } from "../data/siteContent";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-[#00D4FF] to-[#B6FF3B]">
                <Printer className="h-4 w-4 text-white" />
              </span>
              <span className="text-lg font-bold">{siteContent.brandName}</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-background/60">
              Personlige mobildeksler laget ved en fysisk maskin på kjøpesenteret.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background/80">
              Sider
            </h2>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-background/60 transition-colors hover:text-background"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background/80">
              Kort fortalt
            </h2>
            <div className="space-y-2 text-sm text-background/60">
              <p>{siteContent.price} per deksel</p>
              <p>Ferdig på {siteContent.productionTime}</p>
              <p>{siteContent.supportedPhones.join(" og ")}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-background/10 pt-6">
          <p className="text-xs text-background/40">
            {/* Årstallet hentes automatisk, så det slipper å endres manuelt hvert år. */}
            © {new Date().getFullYear()} {siteContent.brandName}. Alle rettigheter forbeholdes.
          </p>
        </div>
      </div>
    </footer>
  );
}
