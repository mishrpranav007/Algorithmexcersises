const findinglcs = (input1,input2) =>
{ 
      let m = input1.length;

      let n = input2.length;

      let lcs = new Array(m+1);

     for(let i=0;i<=m;i += 1)
     {
         lcs[i] = new Array(n+1);
     }

     for(let i=0;i<=m;i += 1)
     {
         for(let j=0;j<=n;j += 1)
         {
             if(i === 0 || j === 0)
             {
                 lcs[i][j] = 0;
             }
             else if(input1.charAt(i-1) === input2.charAt(j-1))
             {
                 lcs[i][j] = lcs[i-1][j-1] + 1;
             }
             else{

                if(lcs[i-1][j] > lcs[i][j-1])
                {
                    lcs[i][j] = lcs[i-1][j];
                }
                else
                {
                    lcs[i][j] = lcs[i][j-1];
                }

             }

         }
     }

    return lcs[m][n];

}
const printminimuminsertiondeletion = (string1,string2) =>
{
    let m = string1.length;

    let n = string2.length;

    let findlength = findinglcs(string1,string2);

    let arr = [];

    let insertionlength = m - findlength;

    let deletionlength = n - findlength;

    arr.push(insertionlength);

    arr.push(deletionlength);

    return arr;


}

module.exports.printminimuminsertiondeletion = printminimuminsertiondeletion;
console.log(printminimuminsertiondeletion("heap","pea"));
