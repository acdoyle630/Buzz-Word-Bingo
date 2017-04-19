/*jshint esversion: 6*/

const express = require('express');
const router = express. Router();

let buzzwords = { buzzwords:[ ] };
let score = 0;

module.exports = router;

router.route('/')
  .get(( req, res ) =>{
    res.json(buzzwords);
  })
  .post(( req, res )=>{
    console.log(req.body.buzzword);
    console.log(buzzwords.buzzwords);
    if(checkBuzzArray(req.body.buzzword) === true ){   buzzwords.buzzwords.push(req.body.buzzword);
    console.log(buzzwords);
    res.json({success: true});
    } else {
      res.json({success: false});
    }
  })
  .put(( req, res )=>{
    console.log('hit put');
  });


  function checkBuzzArray(word){
    console.log(word);
    if(buzzwords.buzzwords.indexOf(word) === -1){
      console.log('NOt found');
      console.log(buzzwords.buzzwords);
      return true;
    }
  }