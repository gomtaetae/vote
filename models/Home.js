var mongoose = require('mongoose');
var Couner = require('./Counter');

//schema
var homeSchema = mongoose.Schema({
    gender:{type:String},
    animal:{type:String},
})

module.exports = mongoose.model('home', homeSchema);