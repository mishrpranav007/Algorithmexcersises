const { findfizzbuzz } = require('./index.js');

const { describe } = require('mocha');

const assert = require('assert');

describe('Testing the index js module', function() {
  
  it('should return the  fizz buzz appearance passed', function() {
      
        const result1 =  findfizzbuzz(8);

        
        let arr1 = [];

        arr1.push(1);
        arr1.push(2);
        arr1.push("Fizz");
        arr1.push(4);
        arr1.push("Buzz");
        arr1.push("Fizz");
        arr1.push(7);
        arr1.push(8);

         

        assert.deepEqual(result1,arr1);

        //assert.deepEqual(result2,arr2);


  });

  it('should return the  fizz buzz appearance passed', function() {




       const result2 = findfizzbuzz(10);

        let arr2 = [];
        
        arr2.push(1);
        arr2.push(2);
        arr2.push("Fizz");
        arr2.push(4);
        arr2.push("Buzz");
        arr2.push("Fizz");
        arr2.push(7);
        arr2.push(8)
        arr2.push("Fizz");
        arr2.push("Buzz");

        assert.deepEqual(result2,arr2);
        
  });
         
});