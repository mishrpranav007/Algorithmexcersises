const { findmeetingpointfromthestartoffirst } = require('./index.js');

const { describe }   = require('mocha');

const assert = require('assert');

describe('Testing the index js module', function(){

      it('should return the meetingpointofeach bicyclist from the first of cities',function() {
           
          const result = findmeetingpointfromthestartoffirst(2,10,1,1,20,1,2);

          assert.deepEqual(result,[ 5, 6.666666666666667 ])
               
      });
});
