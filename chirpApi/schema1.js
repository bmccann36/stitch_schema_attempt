
module.exports = `
type Chirp {
  id: ID!
  text: String
  authorId: ID!
}

type Query {
  chirpById(id: ID!): Chirp
  chirpsByAuthorId(authorId: ID!): [Chirp]
}
`;
