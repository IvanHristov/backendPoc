module.exports = {
  Query: {
    companies(_, { input }, { models }) {
      return models.Companies.findMany(input);
    },
    company(_, { input }, { models }) {
      return models.Companies.findOne(input);
    }
  },
  Mutation: {
    createCompany(_, { input }, { models }) {
      return models.Companies.create(input);
    },
    updateCompany(_, { input, filter }, { models }) {
      return models.Companies.update(input, filter);
    },
    deleteCompany(_, { input }, { models }) {
      return models.Companies.delete(input);
    }
  }
}
