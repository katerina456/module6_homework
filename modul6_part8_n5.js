const stepen = (x, n) => {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
};

let first = 2;
let second = 8;

console.log(`${first} в степени ${second} равно ${stepen(first, second)}`);