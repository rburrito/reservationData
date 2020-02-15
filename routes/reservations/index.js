const express = require('express');
const router = express.Router();
const { Reservation } = require('../../models');

router.get('/', async (req,res) => {
  res.json(await Reservation.all());
});

// make post request to database for reservation
router.post('/', async (req, res)=>{
  console.log(req.body);

  const date  = new Date(req.body.date + " "+ req.body.time).toISOString();

  const id= Math.ceil(Math.random()*165)
    let reservation = new Reservation({
        id: id,
        name: req.body.name,
        slot: date,
        createdAt: new Date(),
        updatedAt: new Date()
    });

    console.log("Reservation info: " +reservation.dataValues);

    reservation.save()
    console.log(req.body.name + " was saved!")
/*  reservation.save(function(err){
    console.log("inside save!")
    if(err){
      res.send("Error: " + err);
    }
    res.send("Okay");

  }); */
  console.log("Response: "+ res);
res.send("Fred was saved!")
  });
/*
  reservation.save(function(err){

}); */

module.exports = router;
