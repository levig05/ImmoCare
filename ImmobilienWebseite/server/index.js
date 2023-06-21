const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
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
  const plz = req.body.plz;
  const bilder = req.body.bilder;
  const status = req.body.status;
  const zustand = req.body.zustand;

  connection.query(
    "INSERT INTO TImmoEigenschaften (ImmoEigBezeichnung, ImmoEigTypen, ImmoEigBaujahr, ImmoEigGrundstueckflaeche, ImmoEigWohnflaeche, ImmoEigAusbaustandart, ImmoEigAnzahlZimmer, ImmoEigAndresse, ImmoEigOrt, ImmoEigPLZ, ImmoEigBilder, ImmoEigStatus, ImmoEigZustand) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
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
      plz,
      bilder,
      status,
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

app.put("/immobilien/:id", (req, res) => {
  const immoId = req.params.id;

  const bezeichnung = req.body.bezeichnung;
  const typen = req.body.typen;
  const baujahr = req.body.baujahr;
  const grundstueckflaeche = req.body.grundstueckflaeche;
  const wohnflaeche = req.body.wohnflaeche;
  const ausbaustandart = req.body.ausbaustandart;
  const anzahlZimmer = req.body.anzahlZimmer;
  const adresse = req.body.adresse;
  const ort = req.body.ort;
  const plz = req.body.plz;
  const bilder = req.body.bilder;
  const status = req.body.status;
  const zustand = req.body.zustand;

  connection.query(
    `UPDATE TImmoEigenschaften SET, ImmoEigBezeichnung ImmoEigTypen=?, ImmoEigBaujahr=?, ImmoEigGrundstueckflaeche=?, ImmoEigWohnflaeche=?, ImmoEigAusbaustandart=?, ImmoEigAnzahlZimmer=?, ImmoEigAndresse=?, ImmoEigOrt=?, ImmoEigBilder=?, ImmoEigStatus=?, ImmoEigZustand=? WHERE  '%${immoId}%'`,

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
      plz,
      bilder,
      status,
      zustand,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Updated");
      }
    }
  );
});

// Suchroute
app.get("/search", (req, res) => {
  const searchTerm = req.query.q;

  const sql = `SELECT * FROM TImmoEigenschaften WHERE ImmoEigBezeichnung LIKE '%${searchTerm}%'`;

  connection.query(sql, (error, results) => {
    if (error) {
      console.error("Error searching in MySQL:", error);
      res.status(500).send("Internal server error");
    } else {
      res.send(results);
    }
  });
});

app.get("/output", (req, res) => {
  const sql = "SELECT * FROM TImmoEigenschaften";

  connection.query(sql, (error, results) => {
    if (error) {
      console.error("Error searching in MySQL:", error);
      res.status(500).send("Internal server error");
    } else {
      res.send(results);
    }
  });
});

app.delete("/immobilien/:id", (req, res) => {
  const immoId = req.params.id;

  const sql = "DELETE FROM TImmoEigenschaften WHERE ImmoEigId = ?";

  connection.query(sql, [immoId], (error, results) => {
    if (error) {
      console.error("Fehler beim Löschen der Immobilie:", error);
      res.status(500).json({ message: "Fehler beim Löschen der Immobilie." });
    } else if (results.affectedRows === 0) {
      res.status(404).json({ message: "Immobilie nicht gefunden." });
    } else {
      res.status(200).json({ message: "Immobilie erfolgreich gelöscht." });
    }
  });
});

app.listen(3001, () => {
  console.log("GOD DID");
});
