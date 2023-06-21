import React from "react";
import "./ImmobilienDetails.css";

const ImmobilienDetails = ({ immobilie }) => {
  return (
    <div className="immobilien-details">
      <h2>Bezeichnung: {immobilie.ImmoEigBezeichnung}</h2>
      <p>Typen: {immobilie.ImmoEigTypen}</p>
      <p>Baujahr: {immobilie.ImmoEigBaujahr}</p>
      <p>Grundstückfläche: {immobilie.ImmoEigGrundstueckflaeche}</p>
      <p>Wohnfläche: {immobilie.ImmoEigWohnflaeche}</p>
      <p>Ausbaustandart: {immobilie.ImmoEigAusbaustandart}</p>
      <p>Anzahl Zimmer: {immobilie.ImmoEigAnzahlzimmer}</p>
      <p>Adresse: {immobilie.ImmoEigAdresse}</p>
      <p>Ort: {immobilie.ImmoEigOrt}</p>
      <p>Status: {immobilie.ImmoEigStatus}</p>
      <p>Zustand: {immobilie.ImmoEigZustand}</p>
      <img src={immobilie.bild} alt={immobilie.name} />
      {/* Weitere Immobiliendetails anzeigen */}
    </div>
  );
};

export default ImmobilienDetails;
