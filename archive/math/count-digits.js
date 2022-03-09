function countDigits(num) {
  if (num == 0) return 1;
  let res = 0;
  while (num != 0) {
    num = Math.trunc(num / 10);
    res++;
  }
  return res;
}
