function swapnumbers(firstnumber,secondnumber)
{
    let temp = firstnumber;
    firstnumber = secondnumber;
    secondnumber = temp;
}
function maxheapify(arr,index)
{
    
    let largest = index; 
    let l = 2 * index + 1; 
    let r = 2 * index + 2;  
  
   
    if (l < arr.length && arr[l] > arr[largest]) 
        largest = l; 
  
   
    if (r < arr.length && arr[r] > arr[largest]) 
        largest = r; 
  
    
    if (largest !== index) { 
        swapnumbers(arr[i], arr[largest]); 
  
        
        heapify(arr,largest); 
    } 
    
}
function buildmaxheap(arr)
{
    let start = (arr.length/2)-1;

    for(let i=start;i>=0;i--)
    {
        maxheapify(arr,i);
    }

    return arr;
}
function minheapify(arr,index)
{
      let smallest = index;
      let left = 2 * index + 1;
      let right = 2 * index + 2;

      if(left<arr.length && arr[left]<arr[smallest])
      {
          smallest = left;
      }
      if(right<arr.length && arr[right<arr[smallest]])
      {
          smallest = right;
      }

      if(smallest != index)
      {
          swapnumbers(smallest,index);

          heapify(arr,smallest);
      }
}
function buildminheap(arr)
{
      for(let i=arr.length/2;i>=1;i--)
      {
          minheapify(arr,i);
      }
}
function printheap(arr)
{
      console.log(...arr);
}
let arr = [1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17];

buildmaxheap(arr);

printheap(arr);

buildminheap(arr);

printheap(arr);


 

 