const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedPets` array in User.js
const petSchema = new Schema({
  name:
    {
      type: String,
    },
  
  description: {
    type: String,
    required: true,
  },
  // saved pet id from petFinder
  petId: {
    type: Number,
    required: true,
  },
  photo: {
    type: String,
  },

  type: {
    type: String,
  }, 

  contact: {
    email: String,
    phone: String,
    address: {
      postcode: String,
    },
  },
  age: { type: String },
  breed: {
    primary: String,
  },
  tag: {
    type: String,
  },
  status: {
    type: String,
  }
});

module.exports = petSchema;
