import React from "react";
import ImmobilienListe from "./ImmobilienListe.jsx";

const immobilienData = [
  {
    id: 1,
    name: "Immobilie 1",
    adresse: "Adresse 1",
    bild: "bild1.jpg",
    // Weitere Informationen zur Immobilie
  },
  {
    id: 2,
    name: "Immobilie 2",
    adresse: "Adresse 2",
    bild: "bild2.jpg",
    // Weitere Informationen zur Immobilie
  },
  // Weitere Immobilien
];

const ImmoAufruf = () => {
  return (
    <div>
      <h1>Immobilienliste</h1>
      <ImmobilienListe immobilien={immobilienData} />
    </div>
  );
};

export default ImmoAufruf;
