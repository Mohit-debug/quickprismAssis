const mongoose = require('mongoose');

const billItemSchema = new mongoose.Schema({
    itemId: { type: String,  required: true},
    price_per_item:{ type: Number, required: true},
    quantity: { type: Number, required: true},

},{timestamps:true});

const billSchema = new mongoose.Schema({
  
    totalAmount: { type: Number, required: true },
    items: [billItemSchema],
  },{timestamps:true});
  
  module.exports = mongoose.model('Bill', billSchema);
