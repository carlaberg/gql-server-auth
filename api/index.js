const user = require('./user')
const merge = require('lodash/merge')

module.exports = {
  typeDefs: [
    user.typeDefs
  ].join(' '),
  resolvers: merge({}, user.resolvers),
  context: req => ({ ...req,
    models: {
      user: user.model
    }
  })
}