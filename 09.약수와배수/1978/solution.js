const fs = require("fs");

const inputPath = process.stdin.isTTY ? "./input.txt" : "/dev/stdin";

const input = fs.readFileSync(inputPath).toString().trim().split("\n");

const N = parseInt(input[0]);

const arr = input[1].split(" ").map(Number);

let count = 0;

for (const number of arr) {
  if (number === 1) continue;

  let isPrime = true;

  for (let i = 2; i < number; i++) {
    // 해당 수로 나누어떨어지는 수가 1개라도 있으면 소수가 아니므로 반복문을 나감
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) count++;
}

console.log(count);
