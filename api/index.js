const user = require('./user')
const post = require('./post')
const merge = require('lodash/merge')

console.log(post.resolvers)

module.exports = {
  typeDefs: [
    user.typeDefs,
    post.typeDefs
  ].join(' '),
  resolvers: merge({}, user.resolvers, post.resolvers),
  context: req => ({ ...req,
    models: {
      user: user.model
    }
  })
}