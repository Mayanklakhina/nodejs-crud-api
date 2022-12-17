const express = require('express');
const { findByIdAndUpdate } = require('../models/programmer');
const router = express.Router();
const Programmer = require('../models/programmer');

//for fetching all the programmers
router.get('/', async(req, res) => {
     try{
       const programmers = await Programmer.find();
       console.log(programmers);
       res.json(programmers);


     } catch(err){
        res.send('ERROR' + err);
     }
})

//for fetching a particular programmer using unique id

router.get('/:id', async(req, res) => {
    try{
      const programmer = await Programmer.findById(req.params.id);
      res.json(programmer);

    } catch(err){
       res.send('ERROR' + err);
    }
})

//for storing new programmer in database
router.post('/', async(req, res) => {
    const programmer = new Programmer({
            name : req.body.name,
            tech : req.body.tech,
            address : req.body.address,
            contactNo : req.body.contactNo,
            employed : req.body.employed
           })

      try { 
           const p1 = await programmer.save();
           res.json(p1);

      } catch(err){
        res.send('Error' + err);
      }
})

//for updating a particular programmer
router.patch('/:id', async(req, res) => {
    try {
        const programmer = await Programmer.findById(req.params.id);
        programmer.tech = req.body.tech
        const p1 = await programmer.save();
           res.json(p1);
    } catch (err){
        res.json('ERROR' +err);
    }
})

module.exports = router;




