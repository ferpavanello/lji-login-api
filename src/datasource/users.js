const { MongoDataSource } = require('apollo-datasource-mongodb')

class Users extends MongoDataSource {
  async createUser (user) {
    return this.collection.insertOne({
      name: user.name,
      email: user.email,
      password: user.password,
      attempts: user.attempts || 0
    })
    .then(result => result.ops[0])
    .catch(() => {
      return {}
    })
  }

  findUserByFields(filterFields) {
    return this.collection.findOne(filterFields)
  }
}

module.exports = Users
