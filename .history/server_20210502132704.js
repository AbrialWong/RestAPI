require('dotenv').config()

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true,useUnifiedTopology: true  });
const db = mongoose.connection
db.on("error", (error)=> console.error(error));
db.once("open", ()=> console.log("Connect to database"));

app.listen(3000, function(req,res){
console.log("Server is running on 3000");
});