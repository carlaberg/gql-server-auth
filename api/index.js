const user = require('./user')
const merge = require('lodash/merge')

module.exports = {
  typeDefs: [
    user.typeDefs
  ].join(' '),
  resolvers: merge({}, user.resolvers),
  // The express request object and the mongoose database models
  // are passed down to the context object which is accessible in the resolvers
  context: req => ({ ...req,
    models: {
      user: user.model
    }
  })
}