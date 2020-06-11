var express = require('express');
var router = express.Router();
var Home = require('../models/Home');

//Home
router.get('/', function(req, res){
    res.render('home/index');
});

//제출
// router.post('/', function(req, res){
    // const home = new Home({
    //     gender: req.body.gender,
    //     animal: req.body.animal,
    // })
    // home.save
    // .then((result) => {
    //     console.log(result);
    //     res.status(201).json(result)
    //     // res.redirect('/')
    // })
// });

module.exports = router;