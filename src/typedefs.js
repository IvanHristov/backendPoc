const gql = require('graphql-tag')

module.exports = gql`
  type Contact {
    id: ID!
    firstName: String
    lastName: String
    email: String
  }

  input NewContactInput {
    firstName: String
    lastName: String
    email: String
  }

  input ContactInput {
    id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Query {
    contacts(input: ContactInput): [Contact]!
    contact(input: ContactInput!): Contact!
  }

  type Mutation {
    createContact(input: NewContactInput!): Contact!
    updateContact(input: NewContactInput!, filter: ContactInput!): [Contact]!
    deleteContact(input: ContactInput!): [Contact]!
  }

`
