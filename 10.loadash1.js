const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items)
const oldItems = _.floor(12.46474)
console.log(newItems);
console.log('Hello people')
console.log(oldItems);