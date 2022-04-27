const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = 0;
  
  if (s1.length === 0 || s2.length === 0) return result;
  
  if (s1.length < s2.length) {
    for (let s of s1) {
      if (s2.includes(s)) {
        s2 = s2.replace(s, '');
        result += 1;
      }
    }
  } else {
    for (let s of s2) {
      if (s1.includes(s)) {
        s1 = s1.replace(s, '');
        result += 1;
      }
    }
  }
  // console.log(s1, s2);
  // console.log(result);
  return result;
}

// getCommonCharacterCount('aabcc', 'adcaa');
// getCommonCharacterCount('zzzz', 'zzzzzzz');
// getCommonCharacterCount('abca', 'xyzbac');

module.exports = {
  getCommonCharacterCount
};
