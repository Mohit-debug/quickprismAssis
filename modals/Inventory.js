const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  item: { type: String,  required: true},
  quantity: { type: Number, required: true},
  price_per_item:{ type: Number, required: true}
},{
    timestamps:true
});

const Item = mongoose.model("Item",inventorySchema)

module.exports = Item;
