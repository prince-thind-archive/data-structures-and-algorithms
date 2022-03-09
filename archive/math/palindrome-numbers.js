function palindromeCheck(num) {
  let res = 0;
  let copy = num;
  while (num != 0) {
    let lastDigit = num % 10;
    res = res * 10 + lastDigit;
    num = Math.trunc(num / 10);
  }
  return res == copy;
}
