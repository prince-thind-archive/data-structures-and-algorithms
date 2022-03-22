function deepClone(obj) {
  if (typeof obj != "object") {
    return obj;
  }

  const res = {};
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      const subObj = obj[prop];
      res[prop] = deepClone(subObj);
    }
  }
  return res;
}
