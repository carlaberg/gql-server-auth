const Post = require('./post.model')

const createPost = async (_, args, ctx) => {
  // 1. Check if user is logged in
  if (!ctx.request.userId) {
    throw new Error('You must be logged in to create a post')
  }

  // Save a post to the database and return the saved post from the resolver
  return Post.create({ ...args.input, createdBy: ctx.request.userId })
}

const postsByCreator = async (_, args, ctx) => {
  if (!ctx.request.userId) {
    throw new Error('You must be logged in to query a post')
  }

  return Post.find({ createdBy: ctx.request.userId })
    .exec()
}

const updatePost = async (_, args, ctx) => {
  if (!ctx.request.userId) {
    throw new Error('You must be logged in to update a post')
  }
  
  const update = args.input
  
  return Post.findByIdAndUpdate(args.id, update, { new: true })
    .exec()
}

const deletePost = async (_, args, ctx) => {
  if (!ctx.request.userId) {
    throw new Error('You must be logged in to delete a post')
  }
  
  return Post.findByIdAndRemove(args.id)
    .exec()
}

module.exports = {
  Query: {
    postsByCreator
  },
  Mutation: {
    createPost,
    updatePost,
    deletePost
  }
}