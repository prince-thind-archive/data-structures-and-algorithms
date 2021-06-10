//lookup table method

let table = [];
function initialize() {
  table.push(0);
  for (let i = 1; i < 256; i++) {
    table[i] = (i & 1) + table[Math.trunc(i / 2)];
  }
}
initialize();


function count(num) {
  
  let res = 0;
  for (let i = 0; i < 5; i++) {
    res += table[num & 255];
    num = num >> 8;
  }

  return res;
}
