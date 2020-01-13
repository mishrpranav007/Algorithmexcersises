const http = require('http');
const server = http.createServer((request, response) => {
   returntriangleornot(2,3,4,5,1,2,3);
});
 //server.listen(7000);
const checktrianglevalidornot = (sidelength1,sidelength2,sidelength3) =>
{ 
      
    if (sidelength1 + sidelength2 <= sidelength3 || sidelength1 + sidelength3 <= sidelength2|| sidelength2 + sidelength3 <= sidelength1) 
        return false;
    else
        return true;
} 

const returntriangleornot = (numberofinputs, ...arrayvalues) =>
{
     
       
          let checkvalidity = [];


          for(let i = 0;i<arrayvalues.length-2;i+=2)
          {
              let sidelength1 = arrayvalues[i];

              let sidelength2 = arrayvalues[i+1];

              let sidelength3 = arrayvalues[i+2];

              let isvalidornot = checktrianglevalidornot(sidelength1,sidelength2,sidelength3);

              //console.log(isvalidornot);

             if(isvalidornot === true)
             {
                 checkvalidity.push(1);
             }
             else{

                checkvalidity.push(0);
             }
          }

     return checkvalidity;

}

server.listen(8080);
//console.log(returntriangleornot(2,3,4,5,1,2,3));

module.exports.checktrianglevalidornot = checktrianglevalidornot;

module.exports.returntriangleornot   = returntriangleornot;

