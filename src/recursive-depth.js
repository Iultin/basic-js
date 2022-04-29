const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  
  calculateDepth(n) {
    // console.log();
    let tempString;
    if (Array.isArray(n)) {
      tempString = JSON.stringify(n).toString();
    } else {
      tempString = n;
    }
    let result = 0;
    let count = 0;
    let temp;
    // arr.forEach(el => {
    //   if (Array.isArray(el)) {
    //     temp = this.countArr(el);
        
    //   }
    // });
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // tempString = JSON.stringify(n).toString();
    for (let i of tempString) {
      if (i === '[') {
        count++;
        if (result < count) result = count;
      }
      if (i === ']') count--;
    }
    temp = '['.repeat(result);

    if (temp.length === 1) {
      return 1;
    } else {
      n = temp.slice(1);
      return 1 + this.calculateDepth(n);
    }
    
    // return resultR;
  }
}

const depthCalc = new DepthCalculator();
// console.log(depthCalc.calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]]));
// depthCalc.calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]]);

module.exports = {
  DepthCalculator
};
