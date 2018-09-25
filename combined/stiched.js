const { mergeSchemas } = require('graphql-tools');
const getSchema1 = require('./chirpSchema');
const getSchema2 = require('./userSchema');


async function createMerged() {
  const chirpSchema = await getSchema1();
  const authorSchema = await getSchema2();

  const linkTypeDefs = `
  extend type User {
    chirps: [Chirp]
  }
  extend type Chirp {
    author: User
  }
`;
  return mergeSchemas({
    schemas: [
      chirpSchema,
      authorSchema,
      linkTypeDefs,
    ],
    resolvers: {
      User: {
        chirps: {
          fragment: `... on User { id }`,
          resolve(user, args, context, info) {
            return info.mergeInfo.delegateToSchema({
              schema: chirpSchema,
              operation: 'query',
              fieldName: 'chirpsByAuthorId',
              args: {
                authorId: user.id,
              },
              context,
              info,
            });
          },
        },
      },
      Chirp: {
        author: {
          fragment: `... on Chirp { authorId }`,
          resolve(chirp, args, context, info) {
            return info.mergeInfo.delegateToSchema({
              schema: authorSchema,
              operation: 'query',
              fieldName: 'userById',
              args: {
                id: chirp.authorId,
              },
              context,
              info,
            });
          },
        },
      },
    },
  });
}


module.exports = createMerged; 
