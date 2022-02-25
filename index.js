//import { secrets } from "docker-secrets";
const Express = require("express");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const fs = require("fs");
require('dotenv').config();
const CONNECTION_URL = process.env.CONNECTION_URL;
const DATABASE_NAME = "reddit"
const http = require("http");
const path = require('path');
//const chartScript = require('./chartScript.js')
var app = Express();
var database, collection;

//const cors = require('cors');
//const { JSDOM } = require( "jsdom" );
//const { window } = new JSDOM( "" );
//const $ = require( "jquery" )( window );

app.use('/js', Express.static(__dirname + '/js'));


app.get('/',(req, res) =>{
    res.sendFile(__dirname + '/index.html');
    //res.json(result);
});

app.listen(5000,()=>{
    console.log("connected")
});

