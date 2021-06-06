function allDivisors(num) {
  let res = [];
  let i = 1;
  for (i = 0; i * i < num; i++) {
    if (num % i == 0) {
      res.push(i);
    }
  }
  for (i; i >= 1; i--) {
    if (num % i == 0) {
      res.push(Math.trunc(num / i));
    }
  }

  return res;
}

