function twoOdd(arr) {
  let res1 = 0;
  let res2 = 0;
  let xor = 0;
  for (let e of arr) {
    xor = xor ^ e;
  }
  let rth = xor & ~(xor - 1);

  for (let e of arr) {
    if ((e & rth) != 0) {
      res1 ^= e;
    } else {
      res2 ^= e;
    }
  }

  return [res1, res2];
}


console.log(twoOdd([2,4,4,2,7,85,6,6,8,7]))