let arr = [];
let res = [];
for (let i = 0; i < 10; i++)
{
    arr.push(Math.floor(Math.random() * 25));
}
console.log("the unsorted array is ", arr);

res = mergeSort(arr);
console.log("sorted array is ", res);


function mergeSort(arr)
{
    if (arr.length == 1)
    {
        return arr;
    }

    const middle = Math.floor(arr.length/2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}
function merge(arr1, arr2)
{
    let res = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length)
    {
        if (arr1[i] < arr2[j])
        {
            res.push(arr1[i++]);
        }
        else
        {
            res.push(arr2[j++]);
        }
    }
    if(i < arr1.length){
        res=res.concat(arr1.slice(i));
    }
    if(j<arr2.length){
        res=res.concat(arr2.slice(j));
    }
    return res;
}
