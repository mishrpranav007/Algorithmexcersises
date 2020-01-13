const findfizzbuzz = (num) =>
{
     let arr = [];

    let i = 1;

    while(i <= num)
    {
        if(i % 3 === 0 && i % 5 === 0)
        {
            arr.push("Fizz Buzz");
        }
        else if(i % 3 === 0)
        {
            arr.push("Fizz");
        }
        else if(i % 5 === 0)
        {
            arr.push("Buzz");
        }
        
        else
        {
            arr.push(i);
        }

        i++;
    }

    return arr;
}
//console.log(findfizzbuzz(18));
module.exports.findfizzbuzz = findfizzbuzz;

