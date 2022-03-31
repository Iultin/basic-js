const { NotImplementedError } = require('../extensions/index.js');

// let matrix = [
//   ["^^", ".", null, 0, false, "", NaN, "^^", 2, true, "dasdas", 1],
//   [2, null, 0, 1, ".", "dasdas", true, NaN, "", false, "^^", "^^"],
//   [false, ".", 1, 0, "^^", null, "", 2, "dasdas", "^^", NaN, true],
//   [".", false, 1, null, NaN, 2, 0, "dasdas", true, "^^", "", "^^"],
//   [false, ".", 1, 0, "^^", true, null, "^^", "", NaN, 2, "dasdas"],
//   [false, NaN, 1, 0, ".", "^^", null, true, "dasdas", "^^", 2, ""],
//   [null, 1, NaN, true, ".", "^^", "^^", 2, "", false, "dasdas", 0],
//   [null, NaN, "", false, ".", 1, 0, "^^", "dasdas", true, 2, "^^"],
// ];

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let sample = "^^";
  let result = 0;
  for (let el_mat of matrix) {
    el_mat.forEach(el => {
      if (el === sample) result++;
    });
  }
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  //console.log(result);
  return result;
}

//countCats(matrix);


module.exports = {
  countCats
};
