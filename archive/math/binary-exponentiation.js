function binExp(num, exp) {
  let res = 1;
  while (exp > 0) {
    if (exp % 2 == 1) {
      res *= num;
    }
    exp = Math.trunc(exp / 2);
    num *= num;
  }
  return res;
}
