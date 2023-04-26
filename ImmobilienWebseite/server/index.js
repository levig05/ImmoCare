const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "SC_ImmoMan",
  host: "i-kf.ch",
  password: "e8ZgT5-Rf",
  database: "SC_ImmoManDB",
});

app.post("/create", (req, res) => {
  const bezeichnung = req.body.bezeichnung;
  const typen = req.body.typen;
  const baujahr = req.body.baujahr;
  const grundstueckflaeche = req.body.grundstueckflaeche;
  const wohnflaeche = req.body.wohnflaeche;
  const ausbaustandart = req.body.ausbaustandart;
  const anzahlZimmer = req.body.anzahlZimmer;
  const adresse = req.body.adresse;
  const ort = req.body.ort;

  db.query(
    "INSERT INTO TImmoEigenschaften (ImmoEigBezeichnung, ImmoEigTypen, ImmoEigBaujahr, ImmoEigGrundstueckflaeche, ImmoEigWohnflaeche, ImmoEigAusbaustandart, ImmoEigAnzahlZimmer, ImmoEigAndresse, ImmoEigOrt) VALUES (?,?,?,?,?,?,?,?,?)",
    [
      bezeichnung,
      typen,
      baujahr,
      grundstueckflaeche,
      wohnflaeche,
      ausbaustandart,
      anzahlZimmer,
      adresse,
      ort,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("GOD DID");
});
