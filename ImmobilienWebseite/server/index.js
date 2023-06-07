<<<<<<< Updated upstream
=======
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
  const bilder = req.body.ort;
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

app.put("/put/0", (req, res) => {
  const id = req.params.id;
  const bezeichnung = req.body.bezeichnung;
  const typen = req.body.typen;
  const baujahr = req.body.baujahr;
  const grundstueckflaeche = req.body.grundstueckflaeche;
  const wohnflaeche = req.body.wohnflaeche;
  const ausbaustandart = req.body.ausbaustandart;
  const anzahlZimmer = req.body.anzahlZimmer;
  const adresse = req.body.adresse;
  const ort = req.body.ort;
  const bilder = req.body.bilder;
  const status = req.body.status;
  const zustand = req.body.zustand;

  connection.query(
    "UPDATE TImmoEigenschaften SET ImmoEigTypen=?, ImmoEigBaujahr=?, ImmoEigGrundstueckflaeche=?, ImmoEigWohnflaeche=?, ImmoEigAusbaustandart=?, ImmoEigAnzahlZimmer=?, ImmoEigAndresse=?, ImmoEigOrt=?, ImmoEigBilder=?, ImmoEigStatus=?, ImmoEigZustand=?, ImmoEigBezeichnung=? WHERE ImmoEigID=?",

    [
      typen,
      baujahr,
      grundstueckflaeche,
      wohnflaeche,
      ausbaustandart,
      anzahlZimmer,
      adresse,
      ort,
      bilder,
      status,
      zustand,
      bezeichnung,
      id,
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

app.delete("/delete:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM TImmoEigenschaften WHERE id = ?";
  connection.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error deleting data:", err);
      res.status(500).json({ error: "An error occurred" });
    } else {
      res.sendStatus(200);
    }
  });
});

app.listen(3001, () => {
  console.log("GOD DID");
});
>>>>>>> Stashed changes
