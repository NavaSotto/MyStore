
var express = require('express');
var app = express();
var CORS = require('cors');
PORT = process.env.PORT || 8080;
assert = require('assert');

// Body parsers for handling POST request data
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(new CORS());  //import express from 'express';


require("dotenv").config({ path: ".env" });
require("./router")(app);



app.listen(PORT, () => console.log(`server is running in port ${PORT}`));
console.log("in server.js");


