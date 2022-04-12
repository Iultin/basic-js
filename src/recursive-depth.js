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

  countArr(arr) {
    return 2;
  }
  
  calculateDepth(arr) {
    let result = 1;
    let temp = 0;
    arr.forEach(el => {
      if (Array.isArray(el)) {
        temp = this.countArr(el);
        
      }
    });
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    console.log(result);
  }
}

const depthCalc = new DepthCalculator();
depthCalc.calculateDepth([1, 2, 3, [4, 5]]);

module.exports = {
  DepthCalculator
};
