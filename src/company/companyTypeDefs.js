const gql = require('graphql-tag')

module.exports = gql`
  type Company {
    id: ID!
    company_name: String!
  }

  input CompanyInput {
    id: ID
    company_name: String
  }

  input NewCompanyInput {
    company_name: String!
  }

  extend type Query {
    companies(input: CompanyInput): [Company]!
    company(input: CompanyInput!): Company!
  }

  extend type Mutation {
    createCompany(input: NewCompanyInput!): Company!
    updateCompany(input: NewCompanyInput!, filter: CompanyInput!): [Company]!
    deleteCompany(input: CompanyInput!): [Company]!
  }

`
