const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // arr.sort((a,b) => {
  //   if(a === -1 || b === -1) return 0;
  //   if (a < b) return -1;
  //   if (a > b) return 1;
  //   return 0;
  // });

  let flag = false;
  let j;

  while (!flag) {
    flag = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === -1) {
        // console.log('continue');
        continue;
      } 
      if (arr[i + 1] !== -1) {
        j = i + 1;
      } else {
        for (let ind = i+1; ind < arr.length; ind++) {
          if (arr[ind] !== -1) {
            j = ind;
            // console.log(ind);
            break;
          }
        }
      }
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        flag = false;
      }
    }
  }


  // [arr[0], arr[1]] = [arr[1], arr[0]];
  // console.log(arr);
  return arr;
}

// sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);

module.exports = {
  sortByHeight
};
