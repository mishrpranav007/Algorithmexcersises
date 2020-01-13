const { matrixmultiplication } = require('./index.js');

const { describe } = require('mocha');

const assert = require('assert');

describe('this function should test the working of matrix multiplication', function() {
  
    it('should return the matrix product passed to it', function() {
    
         
        var mat1 = [[1,2],[3,4]];

        var mat2 = [[5,6],[7,8]];

        const result = matrixmultiplication(mat1,mat2);

        assert.deepEqual(result,[[19,22],[43,50]]);

  });
});