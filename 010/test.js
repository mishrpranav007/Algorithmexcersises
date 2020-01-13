const { getPerimeterofcircle } = require('./index.js');

const { describe }   = require('mocha');

const assert = require('assert');

describe('Testing the index js module', function(){

	it('should return the validity condition of triangles or not',function() {

       const result = getPerimeterofcircle(3,5);

       assert.deepEqual(result,15);


    });

});
