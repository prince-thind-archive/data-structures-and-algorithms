let ex_arr = [0, 1, 2, 3, 4, 5, 6];
let ex_list =
{
    value: 0,
    pointer:
    {
        value: 1,
        pointer:
        {
            value: 2,
            pointer:
            {
                value: 3,
                pointer:
                {
                    value: 4,
                    pointer:
                    {
                        value: 5,
                        pointer:
                        {
                            value: 6,
                            pointer: null


                        }
                    }
                }
            }
        }
    }
};

function ListToArray(list)
{
    let result = [];
    let prop = list;
    for (prop; prop.pointer != null; prop = prop.pointer)
    {
        result.push(prop.value);
    }
    result.push(prop.value);
    return result;
}

function ArraytoList(arr)
{
    let obj = {};
    obj.value = arr[0];
    if (arr.length == 1)
    {
        obj.pointer = null;
    }
    else
    {
        obj.pointer = ArraytoList(arr.slice(1));
    }
    return obj;
}


console.log(ListToArray(ex_list));
let ex = ArraytoList([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
console.log(ListToArray(ex));