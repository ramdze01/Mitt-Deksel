import { useState } from "react";
import { MapPin, Menu, Printer, X } from "lucide-react";
import { navItems, siteContent } from "../data/siteContent";

export function Navbar() {
  // isOpen brukes bare til mobilmenyen. På desktop vises menyen direkte med CSS.
  const [isOpen, setIsOpen] = useState(false);

  // Når brukeren velger en lenke på mobil, lukker vi menyen igjen.
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          onClick={closeMenu}
          className="flex items-center gap-2 text-xl font-bold tracking-tight"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-[#00D4FF] to-[#B6FF3B]">
            <Printer className="h-4 w-4 text-white" />
          </span>
          {siteContent.brandName}
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#locations"
          className="hidden items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          <MapPin className="h-4 w-4" />
          Finn maskin
        </a>

        <button
          type="button"
          className="rounded-lg p-2 transition-colors hover:bg-muted md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Lukk meny" : "Åpne meny"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-border bg-background px-4 py-3 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-3 py-3 text-sm font-medium transition-colors hover:bg-muted"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#locations"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              <MapPin className="h-4 w-4" />
              Finn maskin
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
