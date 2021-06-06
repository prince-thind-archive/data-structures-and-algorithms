function factorial(num) {
  if (num == 0) return 1;
  let res = 1;
  for (let i = 2; i <= num; i++) {
    res = res * i;
  }
  return res;
}
