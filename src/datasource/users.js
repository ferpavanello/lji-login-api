const { MongoDataSource } = require('apollo-datasource-mongodb')

class Users extends MongoDataSource {
  createUser (user) {
    console.log('info', user)
  }
}

module.exports = Users
