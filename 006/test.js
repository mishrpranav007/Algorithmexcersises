const {printminimuminsertiondeletion  } = require('./index.js');

const { describe } = require('mocha');

const assert = require('assert');

describe('this function should test the working of insertion and deletion', function() {
  
    it('should return the number of insertion and deletion', function() {


        const result = printminimuminsertiondeletion("heap","pea");

        assert.deepEqual(result,[2,1]);



    });
});
