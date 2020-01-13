const findareaoftriangles = (x1coordinate,y1coordinate,x2coordinate,y2coordinate,x3coordinate,y3coordinate) =>
{
     
       let areaoftriangle = 0;

       let sidelength1 = Math.sqrt(Math.pow((x2coordinate - x1coordinate),2) + Math.pow((y2coordinate-y1coordinate),2));

       let sidelength2 = Math.sqrt(Math.pow((x3coordinate - x2coordinate),2) + Math.pow((y3coordinate-y2coordinate),2));

       let sidelength3 = Math.sqrt(Math.pow((x3coordinate - x1coordinate),2) + Math.pow((y3coordinate-y1coordinate),2));


       let semiperimeter = (sidelength1 + sidelength2 + sidelength3)/2;

       areaoftriangle = Math.sqrt(semiperimeter * (semiperimeter - sidelength1) * (semiperimeter - sidelength2) * (semiperimeter - sidelength3));


       return areaoftriangle;

}
const gettheareaoftriangle = (numberofinputs,...arrayvalues) => {

        let findareaofeachtriangle = [];


        for(let i=0;i<arrayvalues.length-5;i+=5)
        {
               let x1 = arrayvalues[i];

               let y1 = arrayvalues[i+1];

               let x2 = arrayvalues[i+2];

               let y2 = arrayvalues[i+3];

               let x3 = arrayvalues[i+4];

               let y3 = arrayvalues[i+5];


               let tempareaofeach = findareaoftriangles(x1,y1,x2,y2,x3,y3);

               findareaofeachtriangle.push(tempareaofeach);
        }

        return findareaofeachtriangles;

}
//     console.log(gettheareaoftriangle(1,1,0,0,1,10000,10000));
module.exports.gettheareaoftriangle = gettheareaoftriangle;

module.exports.findareaoftriangles = findareaoftriangles;



