const gql = require('graphql-tag')

module.exports = gql`
  type Contact {
    id: ID!
    first_name: String
    last_name: String
    email: String
    company: Company
  }

  type Company {
    id: ID!
    company_name: String!
  }

  input NewContactInput {
    first_name: String
    last_name: String
    email: String
    company_id: Int
  }

  input ContactInput {
    id: ID
    first_name: String
    last_name: String
    email: String
    company_id: Int
  }

  input CompanyInput {
    id: ID
    company_name: String
  }

  input NewCompanyInput {
    company_name: String!
  }

  type Query {
    contacts(input: ContactInput): [Contact]!
    contact(input: ContactInput!): Contact!
    companies(input: CompanyInput): [Company]!
    company(input: CompanyInput!): Company!
  }

  type Mutation {
    createContact(input: NewContactInput!): Contact!
    updateContact(input: NewContactInput!, filter: ContactInput!): [Contact]!
    deleteContact(input: ContactInput!): [Contact]!
    createCompany(input: NewCompanyInput!): Company!
    updateCompany(input: NewCompanyInput!, filter: CompanyInput!): [Company]!
    deleteCompany(input: CompanyInput!): [Company]!
  }

  type Subscription {
    contactCreated: Contact!
    contactUpdated: Contact!
    contactDeleted: Contact!
  }
`
