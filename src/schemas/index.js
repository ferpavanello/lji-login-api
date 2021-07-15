const { gql } = require('apollo-server')
const User = require('./User')
const Query = require('./Query')

module.exports = gql `
  ${User}
  ${Query}
`
