const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (n.length !== 17) return false;
  let temp = n.split('-');
  let str = 'ABCDEF1234567890';
  temp.forEach(el => {
    console.log(el);
    if (!(str.includes(el[0]) && str.includes(el[0]))) return false;
  });
  // console.log(temp);
  return true;
}

isMAC48Address('00-1B-63-84-45-E6');
isMAC48Address('Z1-1B-63-84-45-E6');
console.log(isMAC48Address('00-1B-63-84-45-E6'));
console.log(isMAC48Address('Z1-1B-63-84-45-E6'));

module.exports = {
  isMAC48Address
};
