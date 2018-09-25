

// eslint-disable-next-line import/prefer-default-export
module.exports = resolvers = {
  Query: {
    userById: (root, args) => getUserById(args),
  },
};


function getUserById(args) {
  return {
    id: 1,
    email: 'stan@gmail',
  };
}
