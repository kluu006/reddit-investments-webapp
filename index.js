const Express = require("express");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
require('dotenv').config();
const CONNECTION_URL = process.env.CONNECTION_URL;
const DATABASE_NAME = "reddit"
const http = require("http");
const fs = require("fs");
const path = require('path');
//const chartScript = require('./chartScript.js')
var app = Express();
var database, collection;


const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

app.use('/js', Express.static(__dirname + '/js'));

app.get("/threads/:stockName", (req, res) => {
    collection.find({query: req.params.stockName}).toArray((error, result) => {
        if(error) {
            return res.status(500).send(error);
        }
        res.json(result);
    });
});


app.get('/',(req, res) =>{
    res.sendFile(__dirname + '/index.html');
    //res.json(result);
});

app.listen(3000,()=>{
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("wallstreet-bets");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});

