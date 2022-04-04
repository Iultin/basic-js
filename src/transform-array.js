const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  let result = [];
  let temp = [];
  let delFlag = false;
  for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i]);
  }
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === '--discard-next' && (i + 1) < temp.length) {
      temp[i + 1] = undefined;
      temp[i] = undefined;
    } else if (temp[i] === '--discard-next') {
      temp[i] = undefined;
    }
    if (temp[i] === '--discard-prev' && (i - 1) >= 0) {
      temp[i - 1] = undefined;
      temp[i] = undefined;
    } else if (temp[i] === '--discard-prev') {
      temp[i] = undefined;
    }
    if (temp[i] === '--double-next' && (i + 1) < temp.length) {
      temp[i] = temp[i + 1];
    } else if (temp[i] === '--double-next') {
      temp[i] = undefined;
    }
    if (temp[i] === '--double-prev' && (i - 1) >= 0) {
      temp[i] = temp[i - 1];
    } else if (temp[i] === '--double-prev') {
      temp[i] = undefined;
    }
  }

  temp.forEach(el => {
    if (el !== undefined) result.push(el);
  });

  // console.log(result);
  return result;
}

// transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]);

module.exports = {
  transform
};
