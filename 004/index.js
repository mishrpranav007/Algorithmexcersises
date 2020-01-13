const matrixmultiplication = (mat1,mat2) =>
{
     let finalmatrix = [];

     for(let i = 0;i<mat1.length;i++)
     {
        //  finalmatrix[i] = 0;
         let row = [];

         for(let j = 0;j<mat2[0].length;j++)
         {
             let sum = 0;

             for(let k = 0;k<mat1[0].length;k++)
             {
                 sum += mat1[i][k] * mat2[k][j];
             }

             row.push(sum);
         }
         finalmatrix.push(row);
     }
     
     return finalmatrix;
}

var mat1 = [[1,2],[3,4]];

var mat2 = [[5,6],[7,8]];


console.log(matrixmultiplication(mat1,mat2));

module.exports.matrixmultiplication = matrixmultiplication;

