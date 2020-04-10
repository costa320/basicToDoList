require("dotenv").config();
const express = require("express");
const app = express();
var router = express.Router();
const path = require("path");
var logger = require("morgan");
/* ROUTES */
var react_routes = require("./server/routes/react.routes.js");
var api_placeSearch_routes = require("./server/api/PlaceSearch");

app.use(logger(process.env.MORGANLEVEL));

/* STATIC REACT BUILD */

/* STATIC REACT BUILD */
app.use(express.static(path.resolve(__dirname, "build")));

/* GESTIONE ROUTING REACT E VARI REFRESH RICHIESTI DAL BROWSER */
/* router.get("*", function(req, res, next) {
  var i = path.resolve(__dirname, "build/index.html");
  res.sendFile(i, function(err) {
    if (err) {
      console.log("INDEX.HTML NOT FOUND ERROR!");
      res.status(500).send(err);
    }
  });
}); */

/* ROUTES */
app.use(react_routes);
app.use("/api/placeSearch", api_placeSearch_routes);

var port = process.env.PORT;
app.listen(port);

app.use("/static", express.static(path.resolve(__dirname, "build")));

console.log("Server running at http://localhost:%d", port);
