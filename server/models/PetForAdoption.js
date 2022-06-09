const { Schema, model } = require('mongoose');

const petForAdoptionSchema = new Schema({
  name: {
    type: String,
  },
  
  description: {
    type: String,
  },

  photo: {
    type: String,
  },

  type: {
    type: String,
  }, 

  contact: {
    type: String,
  },

  phone: {
    type: String,
  },

  address: {
    type: String,
  },

  age: { 
    type: String, 
  },
  breed: {
    type: String,
  },

  gender: {
    type: String,
  },

  status: {
    type: String,
  },

  user: {
    type: String,
  }
});

const PetForAdoption = model('PetForAdoption', petForAdoptionSchema);

module.exports = PetForAdoption;
