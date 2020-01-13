const findsumofevenfibonacci = (limit) =>
{
         if(limit < 2)
         {
                 return 0;
         }

         let firstfibonumber = 0;

         let secondfibonumber = 2;

         let sumofevenfibonacci = firstfibonumber + secondfibonumber;

         while(secondfibonumber <= limit)
         {
                 let thirdfibonumber = 4 * secondfibonumber + firstfibonumber;

                 if(thirdfibonumber > limit)
                 {
                         break;
                 }

                 firstfibonumber = secondfibonumber;

                 secondfibonumber = thirdfibonumber;

                 sumofevenfibonacci = sumofevenfibonacci + secondfibonumber;
         } 
 

       return sumofevenfibonacci;  

}
//console.log(findsumofevenfibonacci(25));

module.exports.findsumofevenfibonacci = findsumofevenfibonacci;
