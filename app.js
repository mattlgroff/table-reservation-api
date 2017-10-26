const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const amountOfTables = 5;
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let tables = [];
let waitlist = [];


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/waitlist", function(req, res) {
  res.json(waitlist);
});

app.get("/api/tables", function(req, res) {
  res.json(tables);
});

app.post("/api/tables", function(req, res) {

  let newReservation = req.body;

  if (tables.length < amountOfTables) {
    waitlist.push(newReservation);
    console.log("Added to waitlist: ");
  }
  else {
    tables.push(newReservation);
    console.log("Added to tables: ");
  }

  console.log(newReservation);
});

app.listen(port, function() {
  console.log("App listening on PORT " + port);
});
