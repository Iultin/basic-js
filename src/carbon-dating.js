const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let sample;
  let flag = true;
  let result = false;
  if (typeof(sampleActivity) !== 'string') return false;
  isNaN(Number(sampleActivity)) ? flag = false : sample = parseFloat(sampleActivity);
  //console.log(result);
  if (isNaN(sample) || sample <= 0) return false;
  if (flag) result = Math.ceil(Math.log(MODERN_ACTIVITY / sample) / (Math.LN2 / HALF_LIFE_PERIOD));

  if (result <=0 || !flag) {
    console.log(false);
    return false;
  }

  //console.log(result);
  return result;
}

//dateSample(' ');

module.exports = {
  dateSample
};