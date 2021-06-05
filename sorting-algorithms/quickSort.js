let arr = [];
let res = [];
for (let i = 0; i < 10; i++)
{
    arr.push(Math.floor(Math.random() * 25));
}
console.log("the unsorted array is ", arr);

res = quickSort(arr);
console.log("sorted array is ", res);

function quickSort(arr)
{
    let res = arr.slice();
    res.push(Infinity);
    main(res, 0, res.length - 1);
    res.pop();
    return res;
}

function main(arr, LB, UB)
{
    if (LB < UB)
    {
        let j = partition(arr, LB, UB);
        main(arr,LB, j);
        main(arr,j + 1, UB);
    }
}
function partition(arr, LB, UB)
{
    let pivot = arr[LB];
    let i = LB, j = UB;
    while (i < j)
    {
        do
        {
            i++;
        } while (arr[i] <= pivot);

        do
        {
            j--;
        } while (arr[j] > pivot);

        if(i<j){
            [arr[i],arr[j]]=[arr[j],arr[i]];
        }
    }
    [arr[LB],arr[j]]=[arr[j],arr[LB]];
    return j;
}