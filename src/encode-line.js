const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = '';
  let count = 0;
  if (str.length === 0) return '';
  if (str.length === 1) {
    result = '1' + str;
    return result;
  } else count++;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i-1]) {
      count++;
      // console.log(str[i]);
    } else {
      count === 1 ? result += str[i - 1] : result += count + str[i - 1];
      
      count = 1;
    }
  }
  count === 1 ? result += str[str.length - 1] : result += count + str[str.length - 1];
  // console.log(result);
  return result;
}

// encodeLine('aabbccc');

module.exports = {
  encodeLine
};
