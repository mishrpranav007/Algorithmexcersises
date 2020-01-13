const { LinkedList  } = require('./index.js');
const { describe }   = require('mocha');
const assert = require('assert');
describe('Testing the index js module', function(){
       it('should return the output of the linked list methods',function() {

        let arr = [1,3,5,4];
        const result = buildmaxheap(arr);

        assert.deepEqual(result,arr);



       });
    
});
