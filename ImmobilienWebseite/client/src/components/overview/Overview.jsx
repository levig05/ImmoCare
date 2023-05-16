import React, { useState } from "react";
import "./overview.css";
import testimmo from "../assets/testimmo.jpeg";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import ImmoAufruf from "./immo/ImmoAufruf";

function Overview() {
  const navigate = useNavigate();

  const Bearbeiten = () => {
    navigate("/Reac");
  };

  const Edit = () => {
    navigate("/Reac1");
  };

  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    const response = await Axios.get(
      `http://localhost:3001/search?q=${searchTerm}`
    );
    console.log(response.data);
    if (response.data.length !== 0) {
      setSearchResults(response.data);
    } else {
      alert("Keine Ergebnisse gefunden");
    }
  };

  return (
    <>
      <ImmoAufruf />
      <div className="Searchbar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <button className="Searchbutton" onClick={handleSearch}>
        &#x1F50D;
      </button>
      <div className="overview">
        <div className="Searchbar"></div>
        <button className="HinzufügenButton" onClick={Bearbeiten}>
          Hinzufügen
        </button>

        {searchResults.map((val, key) => {
          return (
            <div className="Responses" key={key}>
              <h3>Bezeichnung: {val.ImmoEigBezeichnung}</h3>
              <h3>Typen: {val.ImmoEigTypen}</h3>
              <h3>Baujahr: {val.ImmoEigBaujahr}</h3>
              <h3>Grundstueckflaeche: {val.ImmoEigGrundstueckflaeche}</h3>
              <h3>Wohnflaeche: {val.ImmoEigWohnflaeche}</h3>
              <h3>Ausbaustandart: {val.ImmoEigAusbaustandart}</h3>
              <h3>AnzahlZimmer: {val.ImmoEigAnzahlZimmer}</h3>
              <h3>Adresse: {val.ImmoEigAndresse}</h3>
              <h3>Ort: {val.ImmoEigOrt}</h3>
              <h3>Status: {val.ImmoEigStatus}</h3>
              <h3>Zustand: {val.ImmoEigZustand}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Overview;
