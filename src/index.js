const { ApolloServer } = require('apollo-server')
const typeDefs = require('./typedefs')
const resolvers = require('./resolvers')
const db = require('./database')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context() {
    return { ...db }
  }
})

// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`)
// })

server.listen().then(({ url, subscriptionsUrl }) => {
  console.log(`🚀 Server ready at ${url}`);
  console.log(`🚀 Subscriptions ready at ${subscriptionsUrl}`);
});