const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = {};
  domains.forEach(el => {
    el = el.split('.').map(elem => '.' + elem);
    // console.log(el);
    let lenEl = 0;
    let temp = '';
    while (lenEl < el.length) {
      for (let i = lenEl; i < el.length; i++) {
        temp += el[i];
      }
      // console.log(temp);
      if (!(temp in result)) {
        result[temp] = 1;
      } else result[temp]++;
      temp = '';
      lenEl++;
    }
    // console.log(lenEl);
  });
  // console.log(result);
  for (let i in result) {
    let newKey = '.' + i.split('.').reverse().join('.');
    newKey = newKey.slice(0, newKey.length-1);
    // console.log(newKey);
    if (newKey !== i) {
      result[newKey] = result[i];
      // console.log(result);
      // console.log(newKey);
      delete result[i];
    }
    
    // console.log(i);
  }
  // result = result.split('.').reverse().join('.');
  // console.log(result);
  return result;
}

// getDNSStats(['epam.com']);

module.exports = {
  getDNSStats
};
