import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import product from './product';
import banner from './banner';
import banner1 from './banner1';
import banner2 from './banner2';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([ product, banner, banner1, banner2 ]),
})
