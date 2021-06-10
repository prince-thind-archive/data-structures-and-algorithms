function checkPower(num) {
  if (num == 0) return false;
  num = num & (num - 1);
  if (num == 0) {
    return true;
  }

  return false;
}
