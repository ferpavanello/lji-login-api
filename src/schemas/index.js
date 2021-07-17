const { gql } = require('apollo-server')
const User = require('./User')
const Query = require('./Query')
const Mutation = require('./Mutation')

module.exports = gql `
  ${User}
  ${Query}
  ${Mutation}
`
