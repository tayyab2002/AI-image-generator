const express = require("express");
const connectDB = require("./config/dbconnection");

const app = express();

connectDB();



module.exports = app;