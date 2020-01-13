const { findnonrepeatingcharacters } = require('./index.js');
const { describe }   = require('mocha');
const assert = require('assert');
describe('Testing the index js module', function(){
       it('should return the output of the linked list methods',function() {

          
            const result = findnonrepeatingcharacters("ABCDEFGHTRBA",3);

            assert.deepEqual(result,12);

       });

    });