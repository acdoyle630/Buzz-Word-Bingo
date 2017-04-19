/*jshint esversion: 6*/

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));


const server = app.listen(PORT, () =>{
  console.log(`server listening on port ${PORT}`);
});