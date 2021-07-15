module.exports = `
  type Query {
    userById(id: ID!): User!
    userByNameEmail(name: String!, email: String!): [User]!
  }
`
