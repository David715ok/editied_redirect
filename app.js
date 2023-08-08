const express = require("express");
const fs = require("fs");

const app = express();
const port = 8080;

//connect routes to their pages
let puzzle = fs.readFileSync("index.html");
let checkingBot = fs.readFileSync("checkbot.html");

app.get("/", (req, res) => res.redirect("/index"));
app.get("/index", (req, res) => res.end(puzzle));
app.get("/checkbot", (req, res) => res.end(checkingBot));

app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`)
);
