const { returntriangleornot } = require('./index.js');

const { describe }   = require('mocha');

const assert = require('assert');

describe('Testing the index js module', function(){

	it('should return the validity condition of triangles or not',function() {

        const result = returntriangleornot(2,3,4,5,1,2,3);

        assert.deepEqual(result,[1,0]);



    });
});