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
      <div class="card">
        <img src={testimmo} alt="Immobilie" width="100%"></img>
        <div class="container">
          <h4>
            <b>Wohnhaus 1</b>
          </h4>
          <p>Beispieladresse 123</p>
        </div>
      </div>
      <button onClick={Bearbeiten}>Hinzufügen</button>

      {ImmobilienList.map((val, key) => {
        return (
          <div key={key}>
            <h3>bezeichnung: {val.bezeichnung}</h3>
            <h3>typen: {val.typen}</h3>
            <h3>baujahr: {val.baujahr}</h3>
            <h3>grundstueckflaeche: {val.grundstueckflaeche}</h3>
            <h3>wohnflaeche: {val.wohnflaeche}</h3>
            <h3>ausbaustandart: {val.ausbaustandart}</h3>
            <h3>anzahlZimmer: {val.anzahlZimmer}</h3>
            <h3>adresse: {val.adresse}</h3>
            <h3>ort: {val.ort}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Overview;
