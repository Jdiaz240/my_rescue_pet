const { AuthenticationError } = require('apollo-server-express');
const { User, PetForAdoption } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    myPetsForAdoption: async (parent, args, context) => {
      if (context.user) {
        return PetForAdoption.find({ user: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    getAllPetsForAdoption: async () => {
      return PetForAdoption.find();
    },

    petForAdoption: async (parent, { petForAdoptionId }) => {
      return PetForAdoption.findOne({ _id: petForAdoptionId });
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },

    // Add a third argument to the resolver to access data in our `context`
    savePet: async (parent, { newPet }, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        return User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedPets: newPet },},
          { new: true }
        );
      }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw new AuthenticationError('You need to be logged in!');
    },
    // Make it so a logged in user can only remove a skill from their own user
    removePet: async (parent, { petId }, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { savedPets: { petId } } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    savePetForAdoption: async (parent, { newPetForAdoption }, context) => {
      if (context.user) {
        newPetForAdoption.user = context.user._id;
        const petForAdoption = await PetForAdoption.create(newPetForAdoption);

        return petForAdoption;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    updatePetForAdoption: async (parent, { petForAdoptionId, name, description, type, contact, phone, address, age, breed }, context) => {
      if (context.user) {
        const updatedPetForAdoption = await PetForAdoption.findByIdAndUpdate(
          { _id: petForAdoptionId },
          { name: name, description: description, type: type, contact: contact, phone: phone, address: address, age: age, breed: breed },
          { new: true });

        return updatedPetForAdoption;
      }
        throw new AuthenticationError('You need to be logged in!');
      },
  },
};

module.exports = resolvers;
