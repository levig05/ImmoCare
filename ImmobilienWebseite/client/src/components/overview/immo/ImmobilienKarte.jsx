import React from "react";
import "./ImmobilienKarte.css";
import axios from "axios";

const ImmobilienKarte = ({ immobilie, onClick }) => {
  const handleDelete = async (id, onDelete) => {
    try {
      await axios.delete(`http://localhost:3001/delete${id}`);
      onDelete(id); // Call the callback function to update the UI
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <>
      <div className="immobilien-karte" onClick={onClick}>
        <img src={immobilie.bild} alt={immobilie.ImmoEigBezeichnung} />
        <div className="immobilien-info">
          <h2>{immobilie.ImmoEigBezeichnung}</h2>
          <p>{immobilie.ImmoEigAdresse}</p>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default ImmobilienKarte;
