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
        <div className="card">
          <img src={testimmo} alt="Immobilie" width="100%"></img>
          <div class="container">
            <h4>
              <b>Wohnhaus 1</b>
            </h4>
            <p>Beispieladresse 123</p>
          </div>
          <button>Bearbeiten</button>
        </div>
        <button className="HinzufügenButton" onClick={Bearbeiten}>
          Hinzufügen
        </button>

        {searchResults.map((val, key) => {
          return (
            <div className="Responses" key={key}>
              <h3>bezeichnung: {val.ImmoEigBezeichnung}</h3>
              <h3>typen: {val.ImmoEigTypen}</h3>
              <h3>baujahr: {val.ImmoEigBaujahr}</h3>
              <h3>grundstueckflaeche: {val.ImmoEigGrundstueckflaeche}</h3>
              <h3>wohnflaeche: {val.ImmoEigWohnflaeche}</h3>
              <h3>ausbaustandart: {val.ImmoEigAusbaustandart}</h3>
              <h3>anzahlZimmer: {val.ImmoEigAnzahlZimmer}</h3>
              <h3>adresse: {val.ImmoEigAndresse}</h3>
              <h3>ort: {val.ImmoEigOrt}</h3>
              <h3>Mietzustand: {val.ImmoEigMietzustand}</h3>
              <h3>Zustand: {val.ImmoEigZustand}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Overview;
