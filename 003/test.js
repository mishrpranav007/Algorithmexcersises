const { matrixmultiplication } = require('./index.js');

const { describe } = require('mocha');

const assert = require('assert');

describe('this function should test the working of matrix multiplication', function() {
  
    it('should return the matrix product passed to it', function() {
  
         newFunction();
         const result = stk1.functioninfixtopostfix("2 + 3*4");

         assert.deepEqual(result,"234*+");
    });
});

function newFunction() {
    Stack;
    stk1 = new Stack();
}
