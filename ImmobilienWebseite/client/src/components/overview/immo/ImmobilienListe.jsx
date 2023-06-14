import React from "react";
import ImmobilienKarte from "./ImmobilienKarte";
import { useNavigate } from "react-router-dom";
import "./ImmobilienListe.css";

const ImmobilienListe = ({ immobilien }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/immobilien/${id}`);
  };

  return (
    <div className="immobilien-liste">
      {immobilien.map((immobilie) => (
        <ImmobilienKarte
          key={immobilie.id}
          immobilie={immobilie}
          onClick={() => handleClick(immobilie.id)}
        />
      ))}
    </div>
  );
};

export default ImmobilienListe;
