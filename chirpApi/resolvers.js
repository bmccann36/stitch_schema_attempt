


function apple(args) {
  return 'result of graphQl B';
}
// eslint-disable-next-line import/prefer-default-export
module.exports = resolvers = {
  Query: {
    chirpById: (root, args) => getChirp(args),
    chirpsByAuthorId: (root, args) => getChirps(args),
  },
};


function getChirp(args) {
  return {
    id: 1,
    text: 'chirp text',
    authorId: 1
  }
}

function getChirps(args) {
  return [
    {
      id: 1,
      text: 'chirp text',
      authorId: 1
    },
    {
      id: 1,
      text: 'chirp text',
      authorId: 1
    }
  ]
}
