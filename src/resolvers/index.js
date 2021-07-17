module.exports = {
  Query: {
    userById: async (root, args, { dataSources }) => {
      const user = await dataSources.users.findOneById(args.id)
      if (!user) {
        return {}
      }
      return {
        id: user._id,
        name: user.name,
        email: user.email,
        attempts: user.attempts
      }
    },

    userByNameEmail: async (root, args, { dataSources }) => {
      const users = await dataSources.users.findByFields(args)
      console.log(users.length)
      if (!users.length) {
        return []
      }
      return users.map(user => {
        return {
          id: user._id,
          name: user.name,
          email: user.email,
          attempts: user.attempts
        }
      })
    }
  },

  Mutation: {
    createUser: async (root, args, { dataSources }) => {
      const user = await dataSources.users.createUser(args)
      return {
        id: user._id,
        name: user.name,
        email: user.email,
        attempts: user.attempts
      }
    }
  }
}
