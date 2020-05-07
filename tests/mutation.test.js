const gql = require('graphql-tag')
const createTestServer = require('./helper')

const user = { id: 1, first_name: 'ivan', last_name: 'hristov', email: 'ih95@gmail.com' }
const CREATE_CONTACT = gql`
  mutation {
    createContact(input: {first_name: "ivan", last_name: "hr", email: "ih95@gmc"}) {
      id
      first_name
      last_name
      email
    }
  }
`
const UPDATE_CONTACT = gql`
  mutation {
    updateContact(input: {first_name: "ivan"}, filter: {id:4}) {
      id
      first_name
      last_name
      email
    }
  }
`
const DELETE_CONTACT = gql`
  mutation {
    deleteContact(input: {id: 3}) {
      id
      first_name
      last_name
      email
    }
  }
`

describe('mutation', () => {
  test('createContact', async () => {
    const { mutate } = createTestServer({
      models: {
        Contacts: {
          create: jest.fn(input => ({
            id: 1,
            first_name: input.first_name,
            last_name: input.last_name,
            email: input.email
          }))
        }
      }
    })

    const res = await mutate({ query: CREATE_CONTACT })
    expect(res).toMatchSnapshot()
  }),
    test('updateContact', async () => {
      const { mutate } = createTestServer({
        models: {
          Contacts: {
            update: jest.fn(() => [user])
          }
        }
      })

      const res = await mutate({ query: UPDATE_CONTACT })
      expect(res).toMatchSnapshot()
    }),
    test('deleteContact', async () => {
      const { mutate } = createTestServer({
        models: {
          Contacts: {
            delete: jest.fn(() => [user])
          }
        }
      })

      const res = await mutate({ query: DELETE_CONTACT })
      expect(res).toMatchSnapshot()
    });
})
