let arr = [];
for (let i = 0; i < 10; i++)
{
    arr.push(Math.floor(Math.random() * 25));
}
console.log("the unsorted array is ", arr);

let sortedArr = insertionSort(arr);
console.log("sorted array is ",sortedArr);

function insertionSort(arr)
{
    let res=arr.slice();
    for(let i=1;i<res.length;i++)
    {
        let current=res[i];
        let j=i-1;
        for(j=i-1;j>=0&&res[j]>current;j--)
        {
            res[j+1]=res[j];
        }
        res[j+1]=current;
    }
    return res;
}