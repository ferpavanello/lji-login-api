const { MongoDataSource } = require('apollo-datasource-mongodb')

class Users extends MongoDataSource {
  async createUser (user) {
    return this.collection.insertOne({
      name: user.name,
      email: user.email,
      attempts: 0
    })
    .then(result => result.ops[0])
    .catch(err => {
      console.log('Failed to insert a new user', err)
      return {}
    })
  }

  findByNameAndEmail(name, email) {
    return this.collection.findOne({ name, email })
  }
}

module.exports = Users
