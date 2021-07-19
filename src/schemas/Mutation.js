module.exports = `
  type LoginInfo {
    isBlocked: Boolean,
    isLoginCorrect: Boolean
  }

  type Mutation {
    createUser(newUser: UserInput!): User!
    updateUser(filter: UserInput, userFields: UserInput!): User!
    userLogin(email: String!, password: String!): LoginInfo!
  }
`
