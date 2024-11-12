// 10872. 팩토리얼
const fs = require('fs');

const inputPath = './input.txt' || '/dev/stdin';

const input = fs.readFileSync(inputPath).toString().trim();

let N = Number(input);

let result = 1;

function factorial(N) {
// 반복문
  for (let i = 1; i <= N; i++) {
    if (i === 0) return 1;
    else {
      result *= i;
    }
  }
  return result;
}

console.log(factorial(N))

