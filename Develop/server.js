const fs = require("fs");
const path = require("path");
const express = require("express");

const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const app = express();
const PORT = process.env.PORT || 3000;
