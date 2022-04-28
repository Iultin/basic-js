const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = [];
  let temp = {};
  names.forEach(el => {
    if (el in temp) {
      result.push(el + `(${temp[el]})`);
      temp[el]++;
    } else if (result.includes(el)) {
      temp[el] = 1;
      result.push(el + `(${temp[el]})`);
      temp[el]++;
    } else {
      temp[el] = 1;
      result.push(el);
    } 
  });
  

  // console.log(result);
  return result;
}

// renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']);

module.exports = {
  renameFiles
};
