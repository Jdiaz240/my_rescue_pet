const { Schema, model } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedPets` array in User.js
const rehomeSchema = new Schema({
  name: {
    type: String,
    Required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // saved pet id from petFinder
  // id: {
  //   type: Schema.Types.ObjectId,
  //   default: () => new Types.ObjectId(),
  // },
  photos: {
    type: Array,
  },
  contact: {
    email: String,
    phone: String,
  },
  age: { type: String },
  breed: {
    primary: String,
  },
  giveAway: {
    type: Boolean,
  },
});

const Rehome = model('Rehome', rehomeSchema);

module.exports = Rehome;
