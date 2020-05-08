module.exports = {
  Query: {
    contacts(_, { input }, { models }) {
      return models.Contacts.findMany(input);
    },
    contact(_, { input }, { models }) {
      return models.Contacts.findOne(input);
    },
    companies(_, { input }, { models }) {
      return models.Companies.findMany(input);
    },
    company(_, { input }, { models }) {
      return models.Companies.findOne(input);
    }
  },
  Mutation: {
    createContact(_, { input }, { models }) {
      return models.Contacts.create(input);
    },
    updateContact(_, { input, filter }, { models }) {
      return models.Contacts.update(input, filter);
    },
    deleteContact(_, { input }, { models }) {
      return models.Contacts.delete(input);
    },
    createCompany(_, { input }, { models }) {
      return models.Companies.create(input);
    },
    updateCompany(_, { input, filter }, { models }) {
      return models.Companies.update(input, filter);
    },
    deleteCompany(_, { input }, { models }) {
      return models.Companies.delete(input);
    }
  },
  Contact: {
    company(contact, _, { models }) {
      return models.Companies.findOne({ id: contact.company_id });
    }
  }
}
