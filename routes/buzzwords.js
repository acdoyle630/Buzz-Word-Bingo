/*jshint esversion: 6*/

const express = require('express');
const router = express. Router();


let buzzObject = { buzzwords:[ ] };
let score = 0;

module.exports = router;

router.route('/')
  .get(( req, res ) =>{
    res.json(buzzObject);
  })
  .post(( req, res )=>{
    if(checkBuzzArray(req.body.buzzword) < 0 ){
      buzzObject.buzzwords.push(req.body);
      res.json({'success': true});
    } else {
      res.json({'success': false});
    }
  })
  .put(( req, res )=>{
    let index = checkBuzzArray(req.body.buzzword);
    if(index > -1){
      current = buzzObject.buzzwords[index];
      current.heard = req.body.heard;
      score += (Number(current.points));
      res.json({'success': true, 'newScore': score });
      console.log(current);
      console.log(buzzObject);
    }
});


  function checkBuzzArray(word){
    if (buzzObject.buzzwords.length === 0){
      return -1;
    } else {
      for(var i = 0; i<buzzObject.buzzwords.length; i++){
        return(buzzObject.buzzwords[i].buzzword.indexOf(word));
      }
    }
  }