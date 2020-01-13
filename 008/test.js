const { gettheareaoftriangle } = require('./index.js');

const { describe }   = require('mocha');

const assert = require('assert');

describe('Testing the index js module', function(){

	it('should return the area of triaangle using Heron Method',function() {
		const result1 = gettheareaoftriangle(1,1,3,9,5,6,0);

		assert.deepEqual(result1,[16.999999999999993])

		
    });
     
} );