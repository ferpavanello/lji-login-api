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
    },

    updateUser: async (root, args, { dataSources }) => {
      const newUser = await dataSources.users.updateUser(args.filter, args.userFields)
      return {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
        attempts: newUser.attempts
      }
    },

    userLogin: (root, args, { dataSources }) => {
      return dataSources.users.login(args.email, args.password)
    }
  }
}
