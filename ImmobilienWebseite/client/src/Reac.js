import React, { useState } from 'react';
import "./Reac.css";

function PropertyForm() {
  const [bezeichnung, setBezeichnung] = useState('');
  const [typen, setTypen] = useState('Einfamilienhaus');
  const [baujahr, setBaujahr] = useState('');
  const [grundstueckflaeche, setGrundstueckflaeche] = useState('');
  const [wohnflaeche, setWohnflaeche] = useState('');
  const [ausbaustandart, setAusbaustandart] = useState('einfach');
  const [anzahlZimmer, setAnzahlZimmer] = useState('');
  const [adresse, setAdresse] = useState('');
  const [ort, setOrt] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Send HTTP request to API to save property data
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="bezeichnung">Bezeichnung</label>
      <input type="text" id="bezeichnung" value={bezeichnung} onChange={(e) => setBezeichnung(e.target.value)} />

      <label htmlFor="typen">Typen</label>
      <select id="typen" value={typen} onChange={(e) => setTypen(e.target.value)}>
        <option value="Einfamilienhaus">Einfamilienhaus</option>
        <option value="Reiheneinfamilienhaus">Reiheneinfamilienhaus</option>
        <option value="Mehrfamilienhaus">Mehrfamilienhaus</option>
        <option value="Gewerbeliegenschaft">Gewerbeliegenschaft</option>
        <option value="Wohnung">Wohnung</option>
      </select>

      <label htmlFor="baujahr">Baujahr</label>
      <input type="number" id="baujahr" value={baujahr} onChange={(e) => setBaujahr(e.target.value)} />

      <label htmlFor="grundstueckflaeche">Grundstueckflaeche</label>
      <input type="number" id="grundstueckflaeche" value={grundstueckflaeche} onChange={(e) => setGrundstueckflaeche(e.target.value)} />

      <label htmlFor="wohnflaeche">Wohnflaeche</label>
      <input type="number" id="wohnflaeche" value={wohnflaeche} onChange={(e) => setWohnflaeche(e.target.value)} />

      <label htmlFor="ausbaustandart">Ausbaustandart</label>
      <select id="ausbaustandart" value={ausbaustandart} onChange={(e) => setAusbaustandart(e.target.value)}>
        <option value="einfach">Einfach</option>
        <option value="normal">Normal</option>
        <option value="luxuriös">Luxuriös</option>
      </select>

      <label htmlFor="anzahlZimmer">Anzahl Zimmer</label>
      <input type="number" id="anzahlZimmer" value={anzahlZimmer} onChange={(e) => setAnzahlZimmer(e.target.value)} />

      <label htmlFor="adresse">Adresse</label>
    <input type="text" id="adresse" value={adresse} onChange={(e) => setAdresse(e.target.value)} />

  <label htmlFor="ort">Ort</label>
  <input type="text" id="ort" value={ort} onChange={(e) => setOrt(e.target.value)} />

  <button type="submit">Save</button>
</form>
);
}

export default PropertyForm;
