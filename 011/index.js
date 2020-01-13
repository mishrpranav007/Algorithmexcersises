class Battleships{

    constructor(type,firingrange,safetyrange,xcoordinate,ycoordinate)
    {
        this.type = type;
        this.firingrange = firingrange;
        this.safetyrange = safetyrange;
        this.xcoordinate = xcoordinate;
        this.ycoordinate = ycoordinate;
    }
}
Battleships.prototype.checkissafetofireornot = (inputtestcases,...arrayvalues) =>
{
     
    let counter = false;
    let willfireornot = [];
    for(let i=0;i<arrayvalues.length-4;i+=5)
    {
          if(arrayvalues[i].type !== arrayvalues[i+5].type)
          {
              let x1 = arrayvalues[i].xcoordinate;
              let y1 = arrayvalues[i].ycoordinate;

              let x2 = arrayvalues[i+5].xcoordinate;
              let y2 = arrayvalues[i+5].ycoordinate;

              let distancebetweenthem = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2));

              if(distancebetweenthem < arrayvalues[i].firingrange) 
              {
                             if(!friendlyshipsnearby)
                             {
                                   counter = true;          // check for no friendly ships nearby
                                   willfireornot.push(counter);
                             }
              }
              else if(arrayvalues[i].type === arrayvalues[i+5].type)
              {
                 counter = false;
                 willfireornot.push[counter];
              }
        }
    return willfireornot;
}
Battleships.prototype.checkforfriendlyshipsnearby(inputtestcases,...arrayvalues)
{
           let distanceofeachfriendly = [];

           for(let i=0;i<arrayvalues.length;i++)
           {
               for(let j=0;j<arrayvalues.length;j++)
               {
                   if(arrayvalues[i].type === arrayvalues[j].type)
                   {
                       let x1  = arrayvalues[i].xcoordinate;
                       let y1 = arrayvalues[i].ycoordinate;

                       letx2 = arrayvalues[j].xcoordinate;
                       let y2 = arrayvalues[j].ycoordinate;

                       let distancebetween = Math
                   }
               }
           }
}
//let arrayvalues = [];
console.log(checkissafetofireornot(3,A,5,3,1,2,B,6,7,3,4,A,9,10,11,12))

// const battleship1 = new Battleship(A,5,3,1,2);
// const battleship1 = new Battleship(B,6,7,3,4);

// const battleship3 = new Battleship(A,9,10,11,12);

