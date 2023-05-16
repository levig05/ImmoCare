import React from "react";
import "./ImmobilienKarte.css";

const ImmobilienKarte = ({ immobilie, onClick }) => {
  return (
    <div className="immobilien-karte" onClick={onClick}>
      <img src={immobilie.bild} alt={immobilie.name} />
      <div className="immobilien-info">
        <h2>{immobilie.name}</h2>
        <p>{immobilie.adresse}</p>
      </div>
    </div>
  );
};

export default ImmobilienKarte;
