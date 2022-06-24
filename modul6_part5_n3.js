function first(a) {
  return second(b);
}

function second(b) {
  return a + b;
} 

let a = 10;
let b = 23;

console.log (first(a, b));