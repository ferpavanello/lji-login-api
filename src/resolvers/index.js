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

    userByNameEmail: async (root, args, { dataSources }) => {
      const user = await dataSources.users.findByNameAndEmail(args.name, args.email)
      console.log(user)
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
      const user = await dataSources.users.createUser(args)
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
