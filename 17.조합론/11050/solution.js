// 11050. 이항 계수 1

const fs = require('fs');

const inputPath = './input.txt' || '/dev/stdin';

const input = fs.readFileSync(inputPath).toString().trim().split(' ');

const arr = input.map(Number);

function factorial(n) {
  let result = 1;
  if (n === 0 || n === 1) {
    return 1;
  } else {
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
  }
  return result;
}

function binomialCoefficient(a, b) {
  if (a < b) return 0;
  return factorial(a) / (factorial(a - b) * factorial(b));
}

console.log(binomialCoefficient(arr[0], arr[1]));