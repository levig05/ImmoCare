import React, { useState, useEffect } from "react";
import "./Reac1.css";
import Axios from "axios";

function PropertyForm1() {
  const [bezeichnung, setBezeichnung] = useState("");
  const [typen, setTypen] = useState("Einfamilienhaus");
  const [baujahr, setBaujahr] = useState("");
  const [grundstueckflaeche, setGrundstueckflaeche] = useState("");
  const [wohnflaeche, setWohnflaeche] = useState("");
  const [ausbaustandart, setAusbaustandart] = useState("einfach");
  const [anzahlZimmer, setAnzahlZimmer] = useState("");
  const [adresse, setAdresse] = useState("");
  const [ort, setOrt] = useState("");

  useEffect(() => {
    // Fetch data from server and populate state variables
    Axios.get("http://localhost:3001/search", {
      params: {
        q: "Test",
      },
    })
      .then((response) => {
        const data = response.data[0];
        setBezeichnung(data.ImmoEigBezeichnung);
        setTypen(data.ImmoEigTypen);
        setBaujahr(data.ImmoEigBaujahr);
        setGrundstueckflaeche(data.ImmoEigGrundstueckflaeche);
        setWohnflaeche(data.ImmoEigWohnflaeche);
        setAusbaustandart(data.ImmoEigAusbaustandart);
        setAnzahlZimmer(data.ImmoEigAnzahlZimmer);
        setAdresse(data.ImmoEigAdresse);
        setOrt(data.ImmoEigOrt);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    Axios.put(`http://localhost:3001/put/0`, {
      bezeichnung: bezeichnung,
      typen: typen,
      baujahr: baujahr,
      grundstueckflaeche: grundstueckflaeche,
      wohnflaeche: wohnflaeche,
      ausbaustandart: ausbaustandart,
      anzahlZimmer: anzahlZimmer,
      adresse: adresse,
      ort: ort,
    }).then(() => {
      console.log("success");
    });
    
    
  };
  return (
    <form onSubmit={handleFormSubmit}>
    <label htmlFor="bezeichnung">Bezeichnung</label>
    <input
    type="text"
    id="bezeichnung"
    value={bezeichnung}
    onChange={(e) => setBezeichnung(e.target.value)}
    />
      <label htmlFor="typen">Typen</label>
  <select
    id="typen"
    value={typen}
    onChange={(e) => setTypen(e.target.value)}
  >
    <option value="Einfamilienhaus">Einfamilienhaus</option>
    <option value="Reiheneinfamilienhaus">Reiheneinfamilienhaus</option>
    <option value="Mehrfamilienhaus">Mehrfamilienhaus</option>
    <option value="Gewerbeliegenschaft">Gewerbeliegenschaft</option>
    <option value="Wohnung">Wohnung</option>
  </select>

  <label htmlFor="baujahr">Baujahr</label>
  <input
    type="number"
    id="baujahr"
    value={baujahr}
    onChange={(e) => setBaujahr(e.target.value)}
  />

  <label htmlFor="grundstueckflaeche">Grundstueckflaeche</label>
  <input
    type="number"
    id="grundstueckflaeche"
    value={grundstueckflaeche}
    onChange={(e) => setGrundstueckflaeche(e.target.value)}
  />

  <label htmlFor="wohnflaeche">Wohnflaeche</label>
  <input
    type="number"
    id="wohnflaeche"
    value={wohnflaeche}
    onChange={(e) => setWohnflaeche(e.target.value)}
  />

  <label htmlFor="ausbaustandart">Ausbaustandart</label>
  <select
    id="ausbaustandart"
    value={ausbaustandart}
    onChange={(e) => setAusbaustandart(e.target.value)}
  >
    <option value="einfach">Einfach</option>
    <option value="normal">Normal</option>
    <option value="luxuriös">Luxuriös</option>
  </select>

  <label htmlFor="anzahlZimmer">Anzahl Zimmer</label>
  <input
    type="number"
    id="anzahlZimmer"
    value={anzahlZimmer}
    onChange={(e) => setAnzahlZimmer(e.target.value)}
  />

  <label htmlFor="adresse">Adresse</label>
  <input
    type="text"
    id="adresse"
    value={adresse}
    onChange={(e) => setAdresse(e.target.value)}
  />

  <label htmlFor="ort">Ort</label>
  <input
    type="text"
    id="ort"
    value={ort}
    onChange={(e) => setOrt(e.target.value)}
  />

  <button type="submit">Save</button>
</form>
);
}

export default PropertyForm1;