function power(num, exp) {
  if (exp <= 0) return 1;
  if (exp == 1) {
    return num;
  }
  
  if (exp % 2 == 0) {
    let temp = power(num, exp / 2);
    return temp * temp;
  }
  return num * power(num, exp - 1);
}

