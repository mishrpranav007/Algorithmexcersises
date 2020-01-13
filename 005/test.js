const { findsumofevenfibonacci } = require('./index.js');

const { describe }   = require('mocha');

const assert = require('assert');

describe('Testing the index js module', function(){

	it('should find the sum of even fibonacci numbers till a given limit',function() {


        const result1 = findsumofevenfibonacci(25);

        assert.deepEqual(result1,10);


    });
     

});
