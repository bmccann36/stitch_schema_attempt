
import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';
import { introspectSchema, makeRemoteExecutableSchema } from 'graphql-tools';


const link = new HttpLink({ uri: 'https://ri2ma01yf8.execute-api.us-east-1.amazonaws.com/dev/graphql', fetch });
//?

export default async () => {
    const schema = await introspectSchema(link);

    const executableSchema = makeRemoteExecutableSchema({
        schema,
        link,
    });

    return executableSchema;
};


// introspectSchema(link)
//     .then(res => {
//         res.getQueryType() //?
//         const schema = res;
//        const remoteSchema = makeRemoteExecutableSchema({
//             schema,
//             link,
//         })
//         remoteSchema //?
//     })
