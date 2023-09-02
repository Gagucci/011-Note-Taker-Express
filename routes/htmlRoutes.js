// express module to create the server
const express = require("express");
// routes module to create and use the routes
const router = express.Router();
// path module to work with file and directory paths
const path = require("path");

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
