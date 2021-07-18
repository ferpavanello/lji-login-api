module.exports = `  
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    attempts: Int!
  }

  input UserInput {
    id: ID,
    name: String,
    email: String,
    password: String,
    attempts: Int
  }
`
