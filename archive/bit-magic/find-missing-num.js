function missing(arr) {
  let res = 0;
  let i = 0;
  for (i = 0; i < arr.length; i++) {
    res = res ^ i;
    res = res ^ arr[i];
  }
  res = res ^ i;
  return res;
}
