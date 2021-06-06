function sieve(num) {
  let res = [];
  let isPrime = [];

  for (let i = 0; i <= num; i++) {
    isPrime.push(true);
  }

  for (let i = 2; i <= num; i++) {
    if (isPrime[i]) {
      res.push(i);
      for (let j = i * i; j <= num; j=j+i) {
        isPrime[j] = false;
      }
    }
  }
  return res;
}

