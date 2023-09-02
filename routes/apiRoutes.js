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
    else {
      //parses the data into a JSON object
      const notes = JSON.parse(data);
      //responds with the JSON "notes" object
      res.json(notes);
    }
  });
});

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
router.post("/notes", (req, res) => {
  // read db file to retrieve all notes
  fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
    if (err) res.status(500).json(err);
    else {
      // parse the existing notes data as JSON
      const existingNotes = JSON.parse(data);
      // create a new note object with unique id
      const newNote = { ...req.body, id: uuid.v1() };
      // add new note to existing data
      existingNotes.push(newNote);
      // write all the data to the file together
      fs.writeFile(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(existingNotes),
        (err) => {
          if (err) res.status(500).json(err);
          // respond with new note
          else {
            res.json(newNote);
          }
        }
      );
    }
  });
});

// DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete.
router.delete("/notes/:id", (req, res) => {
  // read db file to retrieve all notes
  fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
    if (err) res.status(500).json(err);
    else {
      // parse the existing notes data as JSON
      const existingNotes = JSON.parse(data);
      // filter out the note with the id to delete
      const newNotes = existingNotes.filter(
        (note) => note.id !== req.params.id
      );
      // write all the data to the file together
      fs.writeFile(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(newNotes),
        (err) => {
          if (err) res.status(500).json(err);
          // respond with new note
          else {
            res.json(newNotes);
          }
        }
      );
    }
  });
});

module.exports = router;
