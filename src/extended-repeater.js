const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = '';
  let additionSeparator;
  let separator;
  'additionSeparator' in options ? additionSeparator = options.additionSeparator : additionSeparator = '|';
  'separator' in options ? separator = options.separator : separator = '+';
  if ('addition' in options) {
    if ('additionRepeatTimes' in options) {
      result = (str + (options.addition +
        additionSeparator)
        .repeat(options.additionRepeatTimes));
    } else result = str + options.addition + additionSeparator;
    result = result.slice(0, result.length - additionSeparator.length);
  } else result = str;
  if ('repeatTimes' in options) {
    result = (result + separator).repeat(options.repeatTimes);
    result = result.slice(0, result.length - separator.length);
  }
  // console.log(result);
  return result;
}

// repeater('la', { repeatTimes: 3, separator: 's' });
// repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' });

module.exports = {
  repeater
};
