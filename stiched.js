const { mergeSchemas } = require('graphql-tools');
const getSchema1 = require('./schema1');
const getSchema2 = require('./schema2');



module.exports = async function createMerged() {
  const test = await getSchema1();
  const apple = await getSchema2();

  return mergeSchemas({
    schemas: [
      test,
      apple,
    ],
  });

}


