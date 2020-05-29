const { PubSub } = require('apollo-server');

const pubsub = new PubSub();
const NEW_CONTACT = 'NEW_CONTACT';
const UPDATE_CONTACT = 'UPDATE_CONTACT';
const DELETE_CONTACT = 'DELETE_CONTACT';

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
    async createContact(_, { input }, { models }) {
      const contact = await models.Contacts.create(input);
      pubsub.publish(NEW_CONTACT, { contactCreated: contact });
      return contact;
    },
    async updateContact(_, { input, filter }, { models }) {
      const contact = await models.Contacts.update(input, filter);
      pubsub.publish(UPDATE_CONTACT, { contactUpdated: contact[0].dataValues });
      return contact
    },
    async deleteContact(_, { input }, { models }) {
      const contact = await models.Contacts.delete(input);
      console.log(contact);
      pubsub.publish(DELETE_CONTACT, { contactDeleted: contact[0].dataValues });
      return contact
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
  Subscription: {
    contactCreated: {
      subscribe: () => pubsub.asyncIterator(NEW_CONTACT)
    },
    contactUpdated: {
      subscribe: () => pubsub.asyncIterator(UPDATE_CONTACT)
    },
    contactDeleted: {
      subscribe: () => pubsub.asyncIterator(DELETE_CONTACT)
    }
  },
  Contact: {
    company(contact, _, { models }) {
      return models.Companies.findOne({ id: contact.company_id });
    }
  }
}
