import { Contact } from "../components/Contact";
import { Examples } from "../components/Examples";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { InfoCards } from "../components/InfoCards";
import { Locations } from "../components/Locations";
import { MachineSection } from "../components/MachineSection";
import { Navbar } from "../components/Navbar";

export default function App() {
  // App setter bare sammen seksjonene i riktig rekkefølge.
  // Hver større del av siden ligger i sin egen komponent.
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <InfoCards />
        <HowItWorks />
        <Locations />
        <MachineSection />
        <Examples />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
