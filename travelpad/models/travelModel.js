/*jshint esversion: 6*/
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const COUNTRIES = require('./countries');

const TravelSchema = new Schema({
  title       : {type: String, require: true },
  description : String,
  travelDate  : Date,
  countries   : [{ type: String, enum: COUNTRIES, required: true }],
  _userId     : { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

const TravelModel = mongoose.model('travel', TravelSchema);
module.exports = TravelModel;
