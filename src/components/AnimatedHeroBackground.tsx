import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import HALO from "vanta/src/vanta.halo";

type VantaEffect = {
  destroy: () => void;
};

type Props = {
  children: ReactNode;
  className?: string;
};

export function AnimatedHeroBackground({ children, className = "" }: Props) {
  // Vanta trenger et ekte HTML-element å tegne bakgrunnen på.
  const backgroundRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Effekten startes etter at section-elementet finnes i DOM-en.
    const element = backgroundRef.current;
    if (!element) return;

    // Respekterer brukerens systemvalg dersom redusert animasjon er slått på.
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let effect: VantaEffect | null = null;

    const start = () => {
      if (prefersReducedMotion.matches || effect) return;

      effect = HALO({
        el: element,
        THREE,
        backgroundColor: 0x0b1020,
        baseColor: 0x7c3aed,
        color2: 0x00d4ff,
        size: 1.2,
        amplitudeFactor: 1.2,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
      });
    };

    const stop = () => {
      effect?.destroy();
      effect = null;
    };

    const handleMotionPreference = () => {
      if (prefersReducedMotion.matches) stop();
      else start();
    };

    start();
    prefersReducedMotion.addEventListener("change", handleMotionPreference);

    // Cleanup kjøres når komponenten fjernes, slik at Vanta og event listener ikke blir liggende.
    return () => {
      prefersReducedMotion.removeEventListener("change", handleMotionPreference);
      stop();
    };
  }, []);

  return (
    <section
      ref={backgroundRef}
      className={`relative isolate overflow-hidden bg-[#0B1020] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(124,58,237,0.58),transparent_30%),radial-gradient(circle_at_78%_20%,rgba(0,212,255,0.28),transparent_28%),radial-gradient(circle_at_68%_82%,rgba(182,255,59,0.18),transparent_24%),linear-gradient(135deg,rgba(11,16,32,0.96),rgba(20,22,70,0.9)_48%,rgba(11,16,32,0.98))]" />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
