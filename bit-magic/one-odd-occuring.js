function oneOdd(arr) {
  let res = 0;
  for (let e of arr) {
    res = res ^ e;
  }
  return res;
}
