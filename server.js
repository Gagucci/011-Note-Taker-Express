//  required dependencies for routes to work
const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");
// middleware to parse incoming data
app.use(express.json());
app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
// listener to start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
