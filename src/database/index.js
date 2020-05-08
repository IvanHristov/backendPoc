const createModel = require('./models');
const contacts = require('./models/contacts');
const companies = require('./models/companies');

module.exports = {
  models: {
    Contacts: createModel(contacts),
    Companies: createModel(companies)
  }
}