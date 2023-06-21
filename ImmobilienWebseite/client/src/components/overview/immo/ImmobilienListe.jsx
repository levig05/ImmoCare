import React from "react";
import ImmobilienKarte from "./ImmobilienKarte";
import React1 from "./React1";
import { useNavigate } from "react-router-dom";
import "./ImmobilienListe.css";

const ImmobilienListe = ({ immobilien }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
 
   
  };

  return (
    <div className="immobilien-liste">
      {immobilien.map((immobilie) => {
        console.log(immobilie);
        return (
          <ImmobilienKarte
            key={immobilie.ImmoEigId}
            immobilie={immobilie}
            onClick={() => handleClick(immobilie.ImmoEigId)}
          />
        );
      })}
    </div>
  );
};

export default ImmobilienListe;
