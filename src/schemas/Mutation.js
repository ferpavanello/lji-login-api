module.exports = `
  type Mutation {
    createUser(newUser: UserInput!): User!
    updateUser(filter: UserInput, userFields: UserInput!): User!
  }
`
