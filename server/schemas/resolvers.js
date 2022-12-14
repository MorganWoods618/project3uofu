const { AuthenticationError } = require("apollo-server-express");
const { User, Trip, Destinations } = require("../models");
const { signToken } = require("../utils/auth");
// our resolvers are setting up find a user, adduser, login, savetrip, removetrip.
const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials 1");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials 2");
      }

      const token = signToken(user);
      return { token, user };
    },
    saveTrip: async (parent, { Tripdata }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { trip: Tripdata } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    removeTrip: async (parent, { tripId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { trip: { tripId } } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
