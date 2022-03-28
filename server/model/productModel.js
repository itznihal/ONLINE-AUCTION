const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: [true, "PLEASE ENTER NAME"]
  },
  description: {
    type: String,
    required: [true, "PLEASE ENTER DESCRIPTION"]

  },
  startingBid: {
    type: Number,
    default: 0
  },
  images: [{
    public_id: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }],
  category: {
    type: String, 
    required: [true, "PLEASE ENTER CATEGORY"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  bidStart: {
    type: Date,
    default: Date.now
  },
  bidEnd: {
    type: Date,
    required: "Auction end time is required"
  },
  seller: {
    type: mongoose.Schema.ObjectId,
    ref: 'USER'
  },    
  bids: [{
    bidder: { type: mongoose.Schema.ObjectId, ref: 'USER' },
    bid: Number,
    time: Date
  }]
})

module.exports = mongoose.model('Product', productSchema);