// file system module to read and write files
const fs = require("fs");
// express module to create the server
const express = require("express");
// routes module to create and use the routes
const router = express.Router();
// path module to work with file and directory paths
const path = require("path");
// give unique id to each note
const uuid = require("uuid");

// GET /api/notes should read the db.json file and return all saved notes as JSON.
router.get("/notes", (req, res) => {
  fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
    if (err) res.status(500).json(err);
    res.json(JSON.parse(data));
  });
});

router.post("/notes", (req, res) => {
  // read file
  fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
    if (err) res.status(500).json(err);

    // TODO: parse the data

    // TODO: add new note to existing data

    const newNote = { ...req.body, id: uuid.v1() };
    fs.writeFile(
      path.join(__dirname, "../db/db.json"),
      // TODO: write all teh data to the file together
      JSON.stringify(newNote),
      (err) => {
        if (err) res.status(500).json(err);
        // TODO: respond with new note
      }
    );
  });
});
module.exports = router;
