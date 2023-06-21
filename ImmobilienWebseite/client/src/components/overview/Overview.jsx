import React, { useEffect, useState } from "react";
import "./overview.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import ImmoAufruf from "./immo/ImmoAufruf";

function Overview({ setSearchResults, searchResults }) {
  const navigate = useNavigate();

  const Hinzufügen = () => {
    navigate("/Reac");
  };

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

  const handleReset = () => {
    setSearchResults([]);
    setSearchTerm("");
    handleSearch(); // Neue Suche durchführen, um alle Daten anzuzeigen
    navigate("/");
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <>
      <div className="Searchbar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="HinzufügenButton" onClick={Hinzufügen}>
          Hinzufügen
        </button>
      </div>
      <button className="Resetbutton" onClick={handleReset}>
        &#x1F504;
      </button>
      <button className="Searchbutton" onClick={handleSearch}>
        &#x1F50D;
      </button>
      <ImmoAufruf immo={searchResults} />

      <div className="overview">
        <div className="Searchbar"></div>
      </div>
    </>
  );
}

export default Overview;
