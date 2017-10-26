const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const api = require("./apiController.js");

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", (req, res) => {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", (req, res) => {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/waitlist", (req, res) => {
  res.json(api.waitlist);
});

app.get("/api/tables", (req, res) => {
  res.json(api.tables);
});

app.post("/api/clear", (req, res) => {
  api.clear();
});

app.post("/api/tables", (req, res) => {
  api.newReservation(req);
});

app.listen(port, () => {
  console.log("App listening on PORT " + port);
});
