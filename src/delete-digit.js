const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = +(n.toString().replace(n.toString()[0], ''));
  for (let i = 0; i < n.toString().length; i++) {
    if (+(n.toString().replace(n.toString()[i], '')) > result) {
      result = +(n.toString().replace(n.toString()[i], ''));
    }
  }
  // console.log(result);
  return result;
}

// deleteDigit(222219);

module.exports = {
  deleteDigit
};
