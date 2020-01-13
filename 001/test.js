const { findsetnumbers } = require('./index.js');

const { describe }   = require('mocha');

const assert = require('assert');

describe('Testing the index js module', function(){

	it('should return the sets avoiding duplicates',function() {
		const result = findsetnumbers([-1,0,1,2,-1,-4],6,0);

		let set2 = new Set();

		//set2.add([-1,-1,2],[-1,0,1],[-1,0,1]);
		set2.add([-1,-1,2]);
		set2.add([-1,0,1]);
		set2.add([-1,0,1]);
		assert.deepEqual(result,set2);

		//assert.equal(result,-1 -1 2);
	});
} );