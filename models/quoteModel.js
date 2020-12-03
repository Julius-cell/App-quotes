const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  quote: {
    type: String,
    required: true,
    unique: [true, 'A quote must have a message']
  },
  person: {
    type: String,
    required: true,
  }
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;