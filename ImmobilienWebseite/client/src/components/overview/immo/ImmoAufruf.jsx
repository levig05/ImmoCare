import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ImmobilienListe from "./ImmobilienListe.jsx";
import ImmobilienDetailsPage from "./ImmobilienDetailsPage.jsx";

const ImmoAufruf = ({immo}) => {
  return (
      <div>
        <h1>Immobilienliste</h1>
          <ImmobilienListe immobilien={immo} />
      </div>
  );
};

export default ImmoAufruf;
