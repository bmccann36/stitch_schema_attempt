
const { HttpLink } = require('apollo-link-http');
const fetch = require('node-fetch');
const { introspectSchema, makeRemoteExecutableSchema } = require('graphql-tools');


const link = new HttpLink({ uri: 'https://i6f88qeedf.execute-api.us-east-1.amazonaws.com/dev/graphql', fetch });


module.exports = async () => {
    const schema = await introspectSchema(link);

    const executableSchema = makeRemoteExecutableSchema({
        schema,
        link,
    });

    return executableSchema;
};


