// 4948. 베르트랑 공준

const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";

const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(inputPath)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n")
  .map(Number);

function sieve(max) {
  const isPrime = new Array(max + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i <= max; i++) {
    // 만약 소수일 경우
    if (isPrime[i]) {
      for (let j = i * i; j <= max; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime;
}

let max_n = 123456;
let max_2n = 123456 * 2;

const sieves = sieve(max_2n);
const result = [];

for (let i = 0; i < input.length; i++) {
  const n = input[i];

  if (n === 0) break;

  let count = 0;

  // n 초과 2n 이하
  for (let j = n + 1; j <= n * 2; j++) {
    if (sieves[j]) count++;
  }

  result.push(count);
}

console.log(result.join("\n"));
