// Tekst og innhold som brukes flere steder ligger samlet her i stedet for å skrives inn i hver komponent.
export const siteContent = {
  brandName: "Mitt Deksel",
  price: "249 kr",
  productionTime: "ca. 3 minutter",
  supportedPhones: ["iPhone 11 og nyere", "Samsung S21 og nyere"],
};

// Navbar og footer bruker den samme listen, derfor holder det å endre navigasjonen ett sted.
export const navItems = [
  { label: "Hvordan fungerer det", href: "#how-it-works" },
  { label: "Lokasjoner", href: "#locations" },
  { label: "Maskinen", href: "#machine" },
  { label: "Eksempler", href: "#examples" },
  { label: "Kontakt", href: "#contact" },
];

export const infoCards = [
  {
    title: "249 kr per deksel",
    text: "Fast pris for et personlig mobildeksel laget på stedet.",
  },
  {
    title: "Ferdig på ca. 3 minutter",
    text: "Maskinen printer dekselet mens du venter på kjøpesenteret.",
  },
  {
    title: "iPhone 11 og nyere",
    text: "Velg modell direkte på maskinens skjerm før du starter.",
  },
  {
    title: "Samsung S21 og nyere",
    text: "Støtte for nyere Samsung Galaxy S-modeller.",
  },
];

export const howItWorksSteps = [
  {
    title: "Gå til maskinen",
    text: "Finn en Mitt Deksel-maskin på et av kjøpesentrene.",
  },
  {
    title: "Velg telefonmodell",
    text: "Velg riktig iPhone- eller Samsung-modell på skjermen.",
  },
  {
    title: "Scan QR-koden",
    text: "Bruk kameraet på mobilen for å åpne opplastingen.",
  },
  {
    title: "Last opp bilde",
    text: "Velg et bilde fra mobilen og plasser det slik du vil ha det.",
  },
  {
    title: "Se forhåndsvisning",
    text: "Se hvordan dekselet blir før du går videre til betaling.",
  },
  {
    title: "Betal og få dekselet printet",
    text: "Betal ved maskinen og få dekselet printet på ca. 3 minutter.",
  },
];

export const machineFeatures = [
  {
    title: "QR-opplasting fra mobilen",
    text: "Du trenger ikke laste ned app. Scan, last opp og design fra mobilen.",
  },
  {
    title: "Betaling ved maskinen",
    text: "Kunden betaler på stedet når designet er klart.",
  },
  {
    title: "Print direkte på deksel",
    text: "Maskinen printer motivet direkte på et fysisk mobildeksel.",
  },
  {
    title: "Rask produksjon",
    text: "Dekselet er normalt klart på ca. 3 minutter.",
  },
];

export const exampleCases = [
  {
    name: "Familiebilde",
    gradient: "linear-gradient(135deg, #7C3AED, #00D4FF 58%, #B6FF3B)",
  },
  {
    name: "Reiseminne",
    gradient: "linear-gradient(135deg, #00D4FF, #7C3AED 70%)",
  },
  {
    name: "Minimalistisk",
    gradient: "linear-gradient(135deg, #0B1020, #7C3AED 55%, #00D4FF)",
  },
  {
    name: "Fargerikt motiv",
    gradient: "linear-gradient(135deg, #B6FF3B, #00D4FF 45%, #7C3AED)",
  },
];

export const contactInfo = {
  email: "kontakt@mittdeksel.no",
  partnerEmail: "partner@mittdeksel.no",
};
