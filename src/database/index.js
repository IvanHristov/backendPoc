// const contactModel = () => ({
//   findMany() {
//     return [{
//       first_name: 'Ivan',
//       last_name: 'Hristov',
//       email: 'ivan.hristov@strypes.eu'
//     },
//     {
//       first_name: 'Bat',
//       last_name: 'Georgi',
//       email: 'georgi.gospodinov@strypes.eu'
//     }]
//   },
//   create(input) {
//     return {
//       id: '2131231',
//       first_name: input.first_name,
//       last_name: input.last_name,
//       email: input.email
//     }
//   }
// })
const contacts = require('./models/contacts')
const createModel = require('./models')

module.exports = {
  models: {
    Contacts: createModel(contacts),
  },
}
