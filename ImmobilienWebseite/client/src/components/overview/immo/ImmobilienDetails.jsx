import React from "react";
import "./ImmobilienDetails.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ImmobilienDetails = ({ immobilie }) => {
  const navigate = useNavigate();

  const handleback = () => {
    navigate("/");
  };

  const handleedit = () => {
    axios
      .delete(`http://localhost:3001/immobilien/${immobilie.ImmoEigId}`)
      .then((response) => {
        if (response.status === 200) {
          // Immobilie erfolgreich gelöscht, zur Hauptseite navigieren
          navigate("/Reac1");
        } else {
          console.error("Fehler beim Löschen der Immobilie");
        }
      })
      .catch((error) => {
        console.error("Fehler beim Löschen der Immobilie", error);
      });
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3001/immobilien/${immobilie.ImmoEigId}`)
      .then((response) => {
        if (response.status === 200) {
          // Immobilie erfolgreich gelöscht, zur Hauptseite navigieren
          navigate("/");
        } else {
          console.error("Fehler beim Löschen der Immobilie");
        }
      })
      .catch((error) => {
        console.error("Fehler beim Löschen der Immobilie", error);
      });
  };

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
      <button onClick={handleedit}>Bearbeiten</button>

      <button onClick={handleback}>Zurück</button>

      <button onClick={handleDelete}>Löschen</button>
    </div>
  );
};

export default ImmobilienDetails;
