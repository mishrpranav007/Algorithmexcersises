function sortnumber(a,b)
{
	return a-b;
}
const findsetnumbers = (arr,n,targetsum) =>
{
		let l,r;
		
		arr.sort(sortnumber);

		let i;

		let set1 = new Set();

		for(i = 0;i<n-2;i++)
		{
			l = i + 1;

			r = n - 1;

			while(l < r)
			{
				if(arr[i] + arr[l] + arr[r] == targetsum)
				{
					let temp = [arr[i],arr[l],arr[r]];

					 set1.add(temp);

					 while(arr[l] == arr[l+1])
					 {
                           l++;
					 }

					 while(arr[r] == arr[r-1])
					 {
						 r--;
					 }
					 
					 l++;

					 r--;
				}
				else if(arr[l] + arr[r] < targetsum - arr[i] )
				{

					while(arr[l] == arr[l+1])
					{
						l++;
					}
					l++;

					
				}
				else
				{
					while(arr[r] == arr[r-1])
					 {
						 r--;
					 }
					r--;
				}
			}
		}

		return set1;
}
// findsetnumbers();
// console.log(findsetnumbers([-1,0,1,2,-1,-4],6,0));
module.exports.findsetnumbers = findsetnumbers;