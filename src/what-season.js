const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (date === undefined) return 'Unable to determine the time of year!';
  if (!(date instanceof Date)) {
    // console.log('Invalid date!');
    throw new Error('Invalid date!');
  }
  
  let month = date.getMonth();    
  
  if (month === 0 || month === 1 || month === 11) {
    console.log('winter');
    return 'winter';
  }
  if (month === 2 || month === 3 || month === 4) {
    console.log('spring');
    return 'spring';
  }
  if (month === 5 || month === 6 || month === 7) {
    console.log('summer');
    return 'summer';
  }
  if (month === 8 || month === 9 || month === 10) {
    console.log('autumn');
    return 'autumn';
  }



  //console.log(month);
}

const fakeDate = {
  toString() {
    return Date.prototype.toString.call(new Date());
  },
  [Symbol.toStringTag]: 'Date'
};

Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));

//getSeason(fakeDate);

module.exports = {
  getSeason
};
