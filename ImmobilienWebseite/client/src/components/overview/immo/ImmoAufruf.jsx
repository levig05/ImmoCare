import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ImmobilienListe from "./ImmobilienListe.jsx";
import ImmobilienDetailsPage from "./ImmobilienDetailsPage.jsx";

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
    <Router>
      <div>
        <h1>Immobilienliste</h1>
        <Route exact path="/immobilien">
          <ImmobilienListe immobilien={immobilienData} />
        </Route>
        <Route path="/immobilien/:id">
          <ImmobilienDetailsPage immobilien={immobilienData} />
        </Route>
      </div>
    </Router>
  );
};

export default ImmoAufruf;
