const resolvers = require('../src/resolvers');
const user = { id: 1, first_name: 'ivan', last_name: 'hristov', email: 'ih95@gmail.com' }
describe('resolvers', () => {
  test('contacts', () => {
    const result = resolvers.Query.contacts(null, {}, {
      models: {
        Contacts: {
          findMany: jest.fn(() => user)
        }
      }
    })
    expect(result).toEqual(user);
  }),
    test('contact', () => {
      const result = resolvers.Query.contact(null, {}, {
        models: {
          Contacts: {
            findOne: jest.fn(() => user)
          }
        }
      })
      expect(result).toEqual(user);
    }),
    test('createContact', () => {
      const result = resolvers.Mutation.createContact(null, {}, {
        models: {
          Contacts: {
            create: jest.fn(() => user)
          }
        }
      })
      expect(result).toEqual(user);
    }),
    test('updateContact', () => {
      const result = resolvers.Mutation.updateContact(null, {}, {
        models: {
          Contacts: {
            update: jest.fn(() => user)
          }
        }
      })
      expect(result).toEqual(user);
    }),
    test('deleteContact', () => {
      const result = resolvers.Mutation.deleteContact(null, {}, {
        models: {
          Contacts: {
            delete: jest.fn(() => user)
          }
        }
      })
      expect(result).toEqual(user);
    });

})