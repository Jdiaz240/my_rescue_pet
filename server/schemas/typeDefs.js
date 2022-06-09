const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    petCount: Int
    savedPets: [Pet]
  }

  type Pet {
    name: String!
    petId: ID!
    photo: String
    status: String
    breed: String
    description: String
    age: String
    contact: String
    phone: String
    gender: String
    address: String
    type: String
    userId: String
  }

  input InputPet {
    photo: String
    name: String
    petId: String
    status: String
    breed: String
    description: String
    age: String
    contact: String
    phone: String
    gender: String
    address: String
    type: String
    userId: String
  }

  type PetForAdoption {
    _id: ID!
    name: String
    photo: String
    status: String
    breed: String
    description: String
    age: String
    contact: String
    phone: String
    gender: String
    address: String
    type: String
    user: String
  }

  input InputPetForAdoption {
    photo: String
    name: String
    status: String
    breed: String
    description: String
    age: String
    contact: String
    phone: String
    gender: String
    address: String
    type: String
    user: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    myPetsForAdoption: [PetForAdoption]
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    savePet(newPet: InputPet!): User
    removePet(petId: ID!): User

    savePetForAdoption(newPetForAdoption: InputPetForAdoption!): PetForAdoption
    updatePetForAdoption(petId: ID!, name: String, Description: String): PetForAdoption
  }
`;

module.exports = typeDefs;
