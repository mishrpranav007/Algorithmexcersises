const { LinkedList  } = require('./index.js');
const { describe }   = require('mocha');
const assert = require('assert');
describe('Testing the index js module', function(){
       it('should return the output of the linked list methods',function() {
          
        let ll1 = new LinkedList();

         

        ll1.addelementatend(10);
        ll1.addelementatend(20);
        ll1.addelementatend(30);
 

        let str = "10 20 30";

        const result = ll1.PrintList();

        assert.deepEqual(result,str);
    });

});