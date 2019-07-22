module.exports = {
    resolvers: require('./post.resolvers'),
    typeDefs: require('../../utils/gqlLoader')('post/post.graphql'),
    model: require('./post.model')
  }