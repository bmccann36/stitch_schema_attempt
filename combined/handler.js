const { graphqlLambda, graphiqlLambda } = require('apollo-server-lambda'); 
const lambdaPlayground = require('graphql-playground-middleware-lambda');

const createMerged = require('./stiched');

exports.graphqlHandler = function graphqlHandler(event, context, callback) {
  function callbackFilter(error, output) {
    output.headers['Access-Control-Allow-Origin'] = '*';
    callback(error, output);
  }
  return createMerged()
    .then(mergedSchema => {
      const handler = graphqlLambda({ schema: mergedSchema, 
        // tracing: true 
      });
      return handler(event, context, callbackFilter);
    })

};

exports.playgroundHandler = lambdaPlayground.default({
  endpoint: 'http://localhost:4000/graphql',
}); 

// TO DO **** use a newer version of this lib
exports.graphiqlHandler = graphiqlLambda({
  endpointURL: 'http://localhost:4000/graphql',
});
