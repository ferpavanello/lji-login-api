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
        password: user.password,
        attempts: user.attempts
      }
    },

    userByFields: async (root, args, { dataSources }) => {
      const user = await dataSources.users.findUserByFields(args.filter)
      if (!user) {
        return {}
      }
        return {
          id: user._id,
          name: user.name,
          email: user.email,
        password: user.password,
          attempts: user.attempts
        }
    }
  },

  Mutation: {
    createUser: async (root, args, { dataSources }) => {
      const user = await dataSources.users.createUser(args.newUser)
      return {
        id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
        attempts: user.attempts
      }
    }
  }
}
