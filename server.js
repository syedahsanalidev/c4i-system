"use strict";
const express = require("express");
const app = express();
const path = require("path");


app.use(express.static(path.join(__dirname, './build/')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), "0.0.0.0");
console.log("Express server listening on port : " + app.get("port"));
