function powerSet(arr) {
  let res = [];
  let pow = Math.pow(2, arr.length);
  for (let i = 0; i < pow; i++) {
    let acc = "";
    for (let j = 0; j < arr.length; j++) {
      if ((i & (1 << j)) != 0) {
        acc += arr[j];
      }
    }
    res.push(acc);
  }
  return res;
}
