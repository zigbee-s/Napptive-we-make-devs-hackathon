const express = require("express");
const bodyParser = require("body-parser");
const striptags = require("striptags");

const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.send("Hello");
});

module.exports.main = app;