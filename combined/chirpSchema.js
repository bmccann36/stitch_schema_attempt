
const { HttpLink } = require('apollo-link-http');
const fetch = require('node-fetch');
const { introspectSchema, makeRemoteExecutableSchema } = require('graphql-tools');
const { createApolloFetch } = require('apollo-fetch');
const { setContext } = require('apollo-link-context');
const chalk = require('chalk');

const http = new HttpLink({ uri: 'https://0fkyvz70f4.execute-api.us-east-1.amazonaws.com/dev/graphql', fetch });

const link = setContext((request, previousContext) => ({
    headers: {
        Authorization: `Bearer test`,
        // 'Authorization': `Bearer ${previousContext.graphqlContext.authKey}`,
    },
})).concat(http);

const examiner = setContext((request, previousContext) => {
    console.log(chalk.magenta('HERE!!!!!'), '*\n\n')
    console.log('REQUEST', request)
    console.log('PREVIOUS-CONTEXT \n', previousContext)
})

introspectSchema(examiner)


module.exports = async () => {
    const schema = await introspectSchema(link);

    const executableSchema = makeRemoteExecutableSchema({
        schema,
        link,
    });

    return executableSchema;
};

