const express = require('express');
const router = express.Router();
const { Reservation } = require('../../models');

router.get('/', async (req,res) => {
  res.json(await Reservation.all());
});

// make post request to database for reservation
router.post('/', async (req, res)=>{
  console.log(req.body)

  const date  = new Date(req.body.date + " "+ req.body.time).toISOString();
  console.log(date);
  const id =await Reservation.all().length;
  console.log(id);
  let reservation = new Reservation.create({
      id: id,
      name: req.body.name,
      slot: date
      createdAt: new Date(),
      updatedAt: new Date()
  }).then(console.log("successfully created"));

  reservation.save(function(err){
    if(err){
      res.send(err);
    }
    res.send("Okay!")
  });
  
res.send("Okay")
});

module.exports = router;
