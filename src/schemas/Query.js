module.exports = `
  type Query {
    userById(id: ID!): User!
    userByFields(filter: UserInput!): User!
  }
`
