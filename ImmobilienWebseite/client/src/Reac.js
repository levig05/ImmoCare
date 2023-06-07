import React, { useState } from "react";
import "./Reac.css";
import Axios from "axios";

function PropertyForm() {
  const [bezeichnung, setBezeichnung] = useState("");
  const [typen, setTypen] = useState("Einfamilienhaus");
  const [baujahr, setBaujahr] = useState("");
  const [grundstueckflaeche, setGrundstueckflaeche] = useState("");
  const [wohnflaeche, setWohnflaeche] = useState("");
  const [ausbaustandart, setAusbaustandart] = useState("einfach");
  const [anzahlZimmer, setAnzahlZimmer] = useState("");
  const [adresse, setAdresse] = useState("");
  const [ort, setOrt] = useState("");
  const [plz, setPLZ] = useState("");
  const [bilder, setBilder] = useState("");
  const [status, setStatus] = useState("vermietet");
  const [zustand, setZustand] = useState("Sanierungsbedürftig");

  const addImmobilie = () => {
    Axios.post("http://localhost:3001/create", {
      bezeichnung: bezeichnung,
      typen: typen,
      baujahr: baujahr,
      grundstueckflaeche: grundstueckflaeche,
      wohnflaeche: wohnflaeche,
      ausbaustandart: ausbaustandart,
      anzahlZimmer: anzahlZimmer,
      adresse: adresse,
      ort: ort,
      plz: plz,
      bilder: bilder,
      status: status,
      zustand: zustand,
    }).then(() => {
      console.log("success");
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Send HTTP request to API to save property data
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

      <label htmlFor="plz">PLZ</label>
      <input
        type="text"
        id="plz"
        value={plz}
        onChange={(e) => setPLZ(e.target.value)}
      />

      <label htmlFor="bilder">Bilder</label>
      <input
        type="file"
        id="bilder"
        value={bilder}
        onChange={(e) => setBilder(e.target.value)}
      />

      <label htmlFor="status">Status</label>
      <select
        id="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="vermietet">vermietet</option>
        <option value="leer">leer</option>
        <option value="zum Verkauf">zum Verkauf</option>
        <option value="verkauft">verkauft</option>
      </select>

      <label htmlFor="zustand">Zustand</label>
      <select
        id="zustand"
        value={zustand}
        onChange={(e) => setZustand(e.target.value)}
      >
        <option value="Sanierungsbedürftig">Sanierungsbedürftig</option>
        <option value="Neuwertig">Neuwertig</option>
        <option value="Normal">Normal</option>
      </select>

      <button onClick={addImmobilie}>Save</button>
    </form>
  );
}

export default PropertyForm;
