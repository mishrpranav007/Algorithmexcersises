// const http = require('http');
// const server = http.createServer((request, response) => {
//     findmeetingpointfromthestartoffirst(2,10,1,1,20,1,2);
// });
// server.listen(1001);

const findmeetingpointfromthestartoffirst = (numberoftestcases,...arrayvalues) =>
{
    let findmeetingpointofeach = [];


      for(let i=0;i<arrayvalues.length-2;i+=3)
      {
          let distance = arrayvalues[i];
            //console.log(distance)
          let speedoffirst = arrayvalues[i+1];

          let speedofsecond = arrayvalues[i+2];

        let meetingpoint = (distance/(speedoffirst + speedofsecond)) * speedoffirst;


        findmeetingpointofeach.push(meetingpoint);


      }

      return findmeetingpointofeach;
}

console.log(findmeetingpointfromthestartoffirst(2,10,1,1,20,1,2));

module.exports.findmeetingpointfromthestartoffirst = findmeetingpointfromthestartoffirst;

