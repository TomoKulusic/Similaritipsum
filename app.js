var express = require('express');
const BusinessLayer = require('./services/businessLayer.js')
var app = express();
var bl = new BusinessLayer();
var request = require("request");

let url = 'https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1'

function main() {
  let parsedData = [];
  let data = bl.getData(url, request);
  data.then(function (result) {
    data = result;
    for(var i = 0; i < data.length; i++) {
      parsedData += data[i].split(" ")
    }
    parsedData = parsedData.split(",");
    console.log("Avg similarity is: " + bl.wordsArraySimilarity(parsedData));
  }, function (err) {
    console.log(err);
  })
}
// main();

var test1 = 'a aaa " " a'
console.log(bl.characterSwitch(test1));

module.exports = app;