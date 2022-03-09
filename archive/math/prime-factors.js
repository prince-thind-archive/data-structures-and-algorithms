function primeFactors(num) {
  // border case
  if (num <= 1) return [null];
  let res = [];

  //all factors of 2
  while (num % 2 == 0) {
    res.push(2);
    num = Math.trunc(num / 2);
  }

  //all factors of 3
  while (num % 3 == 0) {
    res.push(3);
    num = Math.trunc(num / 3);
  }

  //all other factors
  for (let i = 5; i * i <= num; i += 6) {
    while (num % i == 0) {
      res.push(i);
      num = Math.trunc(num / i);
    }
    while (num % (i + 2) == 0) {
      res.push(i + 2);
      num = Math.trunc(num / (i + 2));
    }
  }

  //dealing with some special cases (when the last prime factor of original num is greater than the i in ith iteration above )
  if (num > 3) {
    res.push(num);
  }
  return res;
}
