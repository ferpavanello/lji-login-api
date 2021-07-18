require('dotenv').config()
const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')
const typeDefs = require('./src/schemas')
const resolvers = require('./src/resolvers')
const Users = require('./src/datasource/users')

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.b3j3u.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

const client = mongoose.createConnection(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(connection => {
    console.log('Connect with mongo database')
    return connection
  })
  .catch(err => {
    console.log('Failed to connect with mongo database', err)
  })

client.then(client => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        users: new Users(client.db.collection('users'))
      }
    }
  });

  server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`)
  })
})
