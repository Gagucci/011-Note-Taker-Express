//  required dependencies for routes to work
const fs = require("fs");
const path = require("path");
const express = require("express");

// variables to require the html routes
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const app = express();
const PORT = process.env.PORT || 3000;

// middleware to parse incoming data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
