module.exports = {
  Query: {
    contacts(_, { input }, { models }) {
      return models.Contacts.findMany(input);
    },
    contact(_, { input }, { models }) {
      return models.Contacts.findOne(input);
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
    }
  },
  Contact: {
    company(contact, _, { models }) {
      return models.Companies.findOne({ id: contact.company_id });
    }
  }
}
