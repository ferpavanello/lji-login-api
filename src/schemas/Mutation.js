module.exports = `
  input NewUser {
    name: String,
    email: String,
    password: String,
    attempts: Int
  }

  type Mutation {
    createUser(newUser: NewUser!): User!
  }
`
