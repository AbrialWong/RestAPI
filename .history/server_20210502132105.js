const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/subscribers", { useNewUrlParser: true });

app.listen(3000, function(req,res){
console.log("Server is running on 3000");
});