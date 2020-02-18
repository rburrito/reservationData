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

    reservation.save()
  res.redirect("/");
  });


module.exports = router;
