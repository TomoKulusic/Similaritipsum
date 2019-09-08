const express = require('express');
const BusinessLayer = require('../../services/businessLayer.js')
const app = express();
const bl = new BusinessLayer()
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));