import "./App.css";
import Header from "./components/header/Header";
import Overview from "./components/overview/Overview";
import PropertyForm from "./Reac";
import PropertyForm1 from "./Reac1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImmobilienDetailsPage from "./components/overview/immo/ImmobilienDetailsPage";
import React, { useState } from "react";

function App() {
  const [searchResults, setSearchResults] = useState([]);

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
            elements={<ImmobilienDetailsPage immobilien={searchResults} />}
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
