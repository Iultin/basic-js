const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  temp: [],
  result: '',

  getLength() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.temp.length;
  },
  addLink(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (value === null) {
      this.temp.push('null');
    } else {
      this.temp.push(value);
    }

    return this;
  },
  removeLink(position) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (position > this.temp.length || (position - 1) < 0 || !(Number.isInteger(position))) {
      this.temp = [];
      this.result = '';
      throw new Error('You can\'t remove incorrect link!');
    }
    this.temp.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.temp = this.temp.reverse();
    return this;
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.result = '( ' + this.temp.join(' )~~( ') + ' )';
    let str = this.result;
    this.result = '';
    this.temp = [];
    //console.log(str);
    return str;
  }
};

//chainMaker.addLink(1).addLink(2).addLink(3).reverseChain().finishChain();
// chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain();
//chainMaker.addLink(false).addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().addLink().finishChain();
// chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2);
// chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2);
//chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain();

module.exports = {
  chainMaker
};
