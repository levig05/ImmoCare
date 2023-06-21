import React from "react";
import "./ImmobilienKarte.css";

const ImmobilienKarte = ({ immobilie, onClick }) => {
  return (
    <>
      <div className="immobilien-karte" onClick={onClick}>
        <img src={immobilie.bild} alt={immobilie.ImmoEigBezeichnung} />
        <div className="immobilien-info">
          <h2>{immobilie.ImmoEigBezeichnung}</h2>
          <p>{immobilie.ImmoEigAdresse}</p>
        </div>
      </div>
    </>
  );
};

export default ImmobilienKarte;
