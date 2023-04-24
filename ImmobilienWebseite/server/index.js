const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
  user: "SC_ImmoMan",
  host: "i-kf.ch",
  password: "e8ZgT5-Rf",
  database: "SC_ImmoManDB",
});

app.listen(3001, () => {
  console.log("GOD DID");
});
