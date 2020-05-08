const gql = require('graphql-tag')

module.exports = gql`
  type Contact {
    id: ID!
    first_name: String
    last_name: String
    email: String
  }

  input NewContactInput {
    first_name: String
    last_name: String
    email: String
  }

  input ContactInput {
    id: ID
    first_name: String
    last_name: String
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
