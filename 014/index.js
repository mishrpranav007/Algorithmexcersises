function sortnumber(a,b)
{
     return a-b;
}

const findnonrepeatingcharacters  = (string1,input) =>
{

     let n = string1.length;

     let MAX_CHAR = 26;
     let count = new Array(MAX_CHAR);
     let index = new Array(MAX_CHAR);
     
     for (let i = 0; i < MAX_CHAR; i+=1) 
     { 
         count[i] = 0; 
         index[i] = n;    
     } 
   
    
     for (let i = 0; i < MAX_CHAR; i+=1) 
     { 
      
          let x = string1[i];
          ++count[x];
    
         if (count[x] == 1) 
             index[x] = i; 
    
         if (count[x] == 2) 
             index[x] = n; 
     } 
   
   
     let arr = [];

     index.sort(sortnumber);
     
      for(let i=0;i<input;i += 1)
      {
            return index[i];
      }

      
} 

module.exports.findnonrepeatingcharacters = findnonrepeatingcharacters;
console.log(findnonrepeatingcharacters("ABCDEFGHTRBA",3));

