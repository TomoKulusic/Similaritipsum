var express = require('express');
const route = require('./api/controllers/wordsController')
const BusinessLayer = require('./services/businessLayer.js')
var app = express();
var bl = new BusinessLayer();

// app.use('/words', route);
 
var testStringOne = "Testword";
var testStringTwo = "Testwordaaaaaaaaaaaaaaaaa";

// console.log(array);

var wordOne = bl.characterSwitch(testStringOne);
var wordTwo = bl.characterSwitch(testStringTwo)
console.log(bl.wordDifference(wordOne,wordTwo));

module.exports = app;