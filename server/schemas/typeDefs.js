const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    password: String
    trip: [Trip]
  }
  type Trip {
    tripId: ID!
    title: String
    location: String
    user: User
    guests: [User]
    allDay: Boolean
  }
  type Destinations {
    title: String
    destinations: String
    user: User
    guests: [User]
    allDay: Boolean
  }
  type Auth {
    token: ID!
    user: User
  }

  input TripInput {
    title: String
    location: String
    allDay: Boolean
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveTrip(Tripdata: TripInput): User
    removeTrip(tripId: ID): User
  }
`;

module.exports = typeDefs;
