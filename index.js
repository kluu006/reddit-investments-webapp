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
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(5000,()=>{
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("wallstreet-bets");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});

