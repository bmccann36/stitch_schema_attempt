

import {
  mergeSchemas,
} from 'graphql-tools';
import getSchema1 from './schema1';
import getSchema2 from './schema2';


export default async function createMerged() {
  const schemaA = await getSchema1();
  const schemaB = await getSchema2();

  return mergeSchemas({
    schemas: [
      schemaA,
      schemaB,
    ],
  });

}


