import "./App.css";
import Header from "./components/header/Header";
import Overview from "./components/overview/Overview";
import PropertyForm from "./Reac";
import PropertyForm1 from "./Reac1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImmobilienDetailsPage from "./components/overview/immo/ImmobilienDetailsPage";
import React, { useState } from "react";

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      bezeichnung: "Immobilie 1",
      typen: "haus",
      baujahr: "Adresse 1",
      grundstueckflaeche: "4",
      wohnflaeche: "15",
      ausbaustandart: "haus",
      anzahlzimmer: "3",
      adresse: "Strasse 123",
      ort: "Frauenfeld",
      status: "belegt",
      zustand: "okay",
      bild: "bild1.jpg",
      // Weitere Informationen zur Immobilie
    },
    {
      id: 2,
      bezeichnung: "Immobilie 2",
      typen: "haus",
      baujahr: "Adresse 1",
      grundstueckflaeche: "4",
      wohnflaeche: "15",
      ausbaustandart: "haus",
      anzahlzimmer: "3",
      adresse: "Strasse 1234",
      ort: "Frauenfeld",
      status: "belegt",
      zustand: "okay",
      bild: "bild2.jpg",
      // Weitere Informationen zur Immobilie
    },
    // Weitere Immobilien
  ]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <Header />
                <Overview
                  searchResults={searchResults}
                  setSearchResults={setSearchResults}
                />
              </div>
            }
          />
          <Route exact path="/Reac" element={<PropertyForm />} />
          <Route exact path="/Reac1" element={<PropertyForm1 />} />
          <Route
            path="/immobilien/:id"
            element={<ImmobilienDetailsPage immobilien={searchResults} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
