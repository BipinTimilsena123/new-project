const mongoose = require('mongoose');

const express=require("express");
const app=express();

const uri = "mongodb://127.0.0.1:27017/CLIENTPROJECT";

mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB', err));

module.exports = mongoose;

