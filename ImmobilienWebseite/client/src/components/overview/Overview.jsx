import React, { useState } from "react";
import "./overview.css";
import testimmo from "../assets/testimmo.jpeg";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function Overview() {
  const navigate = useNavigate();
  const Bearbeiten = () => {
    navigate("/Reac");
  };

  const [ImmobilienList, setImmobilienList] = useState([]);

  Axios.get("http://localhost:3001/Immobilien").then((response) => {
    setImmobilienList(response.data);
  });

  return (
    <div className="overview">
      <div className="Searchbar">
        <input
          type="text"
          id="searchInput"
          placeholder="Suchbegriff eingeben..."
        ></input>
      </div>
      <div class="card">
        <img src={testimmo} alt="Immobilie" width="100%"></img>
        <div class="container">
          <h4>
            <b>Wohnhaus 1</b>
          </h4>
          <p>Beispieladresse 123</p>
        </div>
        <button>Bearbeiten</button>
      </div>
      <button onClick={Bearbeiten}>Hinzufügen</button>

      {ImmobilienList.map((val, key) => {
        return (
          <div key={key}>
            <h3>bezeichnung: {val.ImmoEigBezeichnung}</h3>
            <h3>typen: {val.ImmoEigTypen}</h3>
            <h3>baujahr: {val.ImmoEigBaujahr}</h3>
            <h3>grundstueckflaeche: {val.ImmoEigGrundstueckflaeche}</h3>
            <h3>wohnflaeche: {val.ImmoEigWohnflaeche}</h3>
            <h3>ausbaustandart: {val.ImmoEigAusbaustandart}</h3>
            <h3>anzahlZimmer: {val.ImmoEigAnzahlZimmer}</h3>
            <h3>adresse: {val.ImmoEigAndresse}</h3>
            <h3>ort: {val.ImmoEigOrt}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Overview;
