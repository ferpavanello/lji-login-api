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

  async updateUser (filter, userFields) {
    const updatedUser = await this.collection.findOneAndUpdate(filter, {
        $set: userFields
      }, {
        new: true
      }
    )
    this.deleteFromCacheById(updatedUser._id)
    return updatedUser.value
  }

  findUserByFields (filterFields) {
    return this.collection.findOne(filterFields)
  }

  async incrementAttempts (filter) {
    const updatedUser = await this.collection.findOneAndUpdate(filter, {
        $inc: { attempts: 1 }
      }
    )
    this.deleteFromCacheById(updatedUser._id)
  }

  async login (email, password) {
    let isLoginCorrect = true
    const user = await this.findUserByFields({ email, password })
    if (!user) {
      this.incrementAttempts({ email })
      isLoginCorrect = false
    }

    const realUser = await this.findUserByFields({ email })
    const isBlocked = Boolean(realUser && realUser.attempts >= 3)
    const shouldResetAttempts = isLoginCorrect && !isBlocked
    if (shouldResetAttempts) {
      this.updateUser({ email: realUser.email }, { attempts: 0 })
    }

    return {
      isBlocked,
      isLoginCorrect
    }
  }
}

module.exports = Users
