import React from "react";
import "./ImmobilienDetails.css";

const ImmobilienDetails = ({ immobilie }) => {
  return (
    <div className="immobilien-details">
      <h2>{immobilie.name}</h2>
      <p>{immobilie.adresse}</p>
      <img src={immobilie.bild} alt={immobilie.name} />
      {/* Weitere Immobiliendetails anzeigen */}
    </div>
  );
};

export default ImmobilienDetails;
