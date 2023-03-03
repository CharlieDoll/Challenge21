const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    savedBooks: [Book]
    bookCount: Int
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User!
  }

  input bookInput {
    bookId: String!
    authors: [String]
    title: String!
    description: String
    image: String
    link: String
  }

  type Query {
    me: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    saveBook(bookData: bookInput!): User
    deleteBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
