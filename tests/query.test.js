const gql = require('graphql-tag')
const createTestServer = require('./helper')

const user = { id: 1, first_name: 'ivan', last_name: 'hristov', email: 'ih95@gmail.com' }
const CONTACTS = gql`
  {
    contacts {
      id
      first_name
      last_name
      email
    }
  }
`
const CONTACT = gql`
  {
    contact(input: {id: 5}) {
      id
      first_name
      last_name
      email
    }
  }
`

describe('queries', () => {
  test('contacts', async () => {
    const { query } = createTestServer({
      models: {
        Contacts: {
          findMany: jest.fn(() => [user])
        }
      }
    })

    const res = await query({ query: CONTACTS })
    expect(res).toMatchSnapshot()
  }),
    test('contact ', async () => {
      const { query } = createTestServer({
        models: {
          Contacts: {
            findOne: jest.fn(() => user)
          }
        }
      })

      const res = await query({ query: CONTACT })
      expect(res).toMatchSnapshot()
    });
})
