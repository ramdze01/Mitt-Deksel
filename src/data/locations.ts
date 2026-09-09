// Typen beskriver hvilke felter hver lokasjon må ha. TypeScript sier fra hvis noe mangler.
export type Location = {
  id: string;
  name: string;
  area: string;
  address: string;
  openingHours: string;
  status: string;
  note: string;
};

// Selve lokasjonsdataene er skilt fra React-komponenten som viser dem.
export const locations: Location[] = [
  {
    id: "vaerstetorvet",
    name: "Værstetorvet",
    area: "Fredrikstad",
    address: "Adresse kommer",
    openingHours: "Åpningstider kommer",
    status: "Maskin på senteret",
    note: "Bekreft nøyaktig plassering inne på senteret før publisering.",
  },
  {
    id: "rykkinn-senter",
    name: "Rykkinn Senter",
    area: "Rykkinn",
    address: "Adresse kommer",
    openingHours: "Åpningstider kommer",
    status: "Maskin på senteret",
    note: "Bekreft nøyaktig plassering inne på senteret før publisering.",
  },
  {
    id: "skedsmo-senter",
    name: "Skedsmo Senter",
    area: "Skedsmo",
    address: "Adresse kommer",
    openingHours: "Åpningstider kommer",
    status: "Maskin på senteret",
    note: "Bekreft nøyaktig plassering inne på senteret før publisering.",
  },
  {
    id: "rortunet-senter",
    name: "Rortunet Senter",
    area: "Lokasjon kommer",
    address: "Adresse kommer",
    openingHours: "Åpningstider kommer",
    status: "Maskin på senteret",
    note: "Bekreft nøyaktig plassering inne på senteret før publisering.",
  },
];
