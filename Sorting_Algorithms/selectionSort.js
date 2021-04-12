let arr = [];
let res = [];
for (let i = 0; i < 10; i++)
{
    arr.push(Math.floor(Math.random() * 25));
}
console.log("the unsorted array is ", arr);

res = selectionSort(arr);
console.log("sorted array is ", res);


function selectionSort(arr){
    let res=arr.slice();
    let min=Infinity;
    let swapIndex=0;
    for(let i=0;i<res.length;i++)
    {
       min=Infinity;
       for(let j=i;j<res.length;j++)
       {
            if(res[j]<min)
            {
                min=res[j];
                swapIndex=j;
            }
       }
       if(min!=Infinity)
       {
           [res[swapIndex],res[i]]=[res[i],res[swapIndex]];
       }
       
    }
    return res;
}