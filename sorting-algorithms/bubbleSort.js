let arr = [];
for (let i = 0; i < 10; i++)
{
    arr.push(Math.floor(Math.random() * 25));
}
console.log("the unsorted array is ", arr);

let sortedArr = bubbleSort(arr);
console.log("sorted array is ",sortedArr);


function bubbleSort(arr)
{
    let res = arr.slice();

    for (let pass = 0; pass < res.length - 2; pass++)
    {
        for (let i = 0; i < res.length - 1 - pass; i++)
        {
            if (res[i+1] < res[i])
            {
                [res[i],res[i+1]]=[res[i+1],res[i]];
            }
        }
    }
    return res;
}
