import { useEffect, useRef } from "react";
import {
  CheckCircle,
  CreditCard,
  MapPin,
  Monitor,
  QrCode,
  Smartphone,
  Upload,
} from "lucide-react";
import howItWorksVideo from "../assets/videos/MaskinVideo.mp4";
import { howItWorksSteps } from "../data/siteContent";

// Ikonene ligger i samme rekkefølge som stegene i howItWorksSteps.
const stepIcons = [MapPin, Smartphone, QrCode, Upload, Monitor, CreditCard];

function ProcessVideoCard() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 1.5;

    // Videoen starter når nok av den er synlig på skjermen, og stopper når brukeren scroller bort.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.currentTime = 0;
          video.playbackRate = 1.5;
          video.play().catch(() => {});
        } else {
          video.pause();
          video.currentTime = 0;
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(video);

    // Rydder observeren når komponenten ikke lenger brukes.
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, []);

  return (
    <aside className="order-1 lg:order-2 lg:h-full">
      <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-5 shadow-sm">
        <div className="flex min-h-[260px] flex-1 items-center justify-center overflow-hidden rounded-2xl border border-border bg-black lg:min-h-0">
          <video
            ref={videoRef}
            className="h-full w-full bg-black object-contain"
            controls
            muted
            loop
            playsInline
            preload="metadata"
            src={howItWorksVideo}
            onPlay={(event) => {
              event.currentTarget.playbackRate = 1.5;
            }}
          >
            Nettleseren din støtter ikke video.
          </video>
        </div>
      </div>
    </aside>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative isolate scroll-mt-20 overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_12%_18%,rgba(124,58,237,0.10),transparent_32%),radial-gradient(circle_at_88%_34%,rgba(0,212,255,0.10),transparent_30%),radial-gradient(circle_at_58%_94%,rgba(182,255,59,0.10),transparent_28%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Hvordan fungerer det
          </p>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Fra mobilbilde til ferdig deksel
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Hele prosessen skjer ved den fysiske maskinen på kjøpesenteret. Du bruker mobilen
            til opplasting, men dekselet lages på stedet.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.85fr)]">
          <div className="order-2 lg:order-1">
            <ol className="relative space-y-6 before:absolute before:bottom-6 before:left-6 before:top-6 before:w-px before:bg-gradient-to-b before:from-primary before:via-[#00D4FF] before:to-[#B6FF3B]">
              {/* Innholdet kommer fra datafilen, så nye steg kan legges til uten å kopiere hele HTML-strukturen. */}
          {howItWorksSteps.map((step, index) => {
                const Icon = stepIcons[index] ?? CheckCircle;

                return (
                  <li key={step.title} className="relative flex gap-4">
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-lg font-black text-primary-foreground shadow-[0_10px_24px_rgba(124,58,237,0.24)]">
                      {index + 1}
                    </div>

                    <article className="flex-1 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-[#00D4FF]/50">
                      <div className="mb-2 flex items-center gap-2">
                        <Icon className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                    </article>
                  </li>
                );
              })}
            </ol>
          </div>

          <ProcessVideoCard />
        </div>
      </div>
    </section>
  );
}
