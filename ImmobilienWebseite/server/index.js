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
  const bilder = req.body.ort;
  const mietzustand = req.body.mietzustand;
  const zustand = req.body.zustand;

  db.query(
    "INSERT INTO TImmoEigenschaften (ImmoEigBezeichnung, ImmoEigTypen, ImmoEigBaujahr, ImmoEigGrundstueckflaeche, ImmoEigWohnflaeche, ImmoEigAusbaustandart, ImmoEigAnzahlZimmer, ImmoEigAndresse, ImmoEigOrt, ImmoEigBilder, ImmoEigMietzustand, ImmoEigZustand) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
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
      bilder,
      mietzustand,
      zustand,
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

app.get("/Immobilien", (req, res) => {
  db.query("SELECT * FROM TImmoEigenschaften", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/picture", (req, res) => {
  // Bild von der MySQL-Datenbank abrufen
  connection.query(
    "SELECT ImmoEigBilder FROM TImmobilienEigenschaften",
    (error, results, fields) => {
      if (error) throw error;
      res.json(results);
    }
  );
});

app.listen(3001, () => {
  console.log("GOD DID");
});
