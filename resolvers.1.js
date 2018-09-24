
function apple(args) {
  return 'result of graphQl B';
}
// eslint-disable-next-line import/prefer-default-export
export const resolvers = {
  Query: {
    apple: (root, args) => apple(args),
  },
};
