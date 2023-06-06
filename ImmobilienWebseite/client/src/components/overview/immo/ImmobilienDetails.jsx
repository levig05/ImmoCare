import React from "react";
import "./ImmobilienDetails.css";

const ImmobilienDetails = ({ immobilie }) => {
  return (
    <div className="immobilien-details">
      <h2>Bezeichnung: {immobilie.bezeichnung}</h2>
      <p>Typen: {immobilie.typen}</p>
      <p>Baujahr: {immobilie.baujahr}</p>
      <p>Grundstückfläche: {immobilie.grundstueckflaeche}</p>
      <p>Wohnfläche: {immobilie.wohnflaeche}</p>
      <p>Ausbaustandart: {immobilie.ausbaustandart}</p>
      <p>Anzahl Zimmer: {immobilie.anzahlzimmer}</p>
      <p>Adresse: {immobilie.adresse}</p>
      <p>Ort: {immobilie.ort}</p>
      <p>Status: {immobilie.status}</p>
      <p>Zustand: {immobilie.zustand}</p>
      <img src={immobilie.bild} alt={immobilie.name} />
      {/* Weitere Immobiliendetails anzeigen */}
    </div>
  );
};

export default ImmobilienDetails;
