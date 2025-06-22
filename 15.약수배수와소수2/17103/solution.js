// 17103. 골드바흐 파티션

function sieve(max) {
  const isPrime = new Array(max + 1).fill(true);
  isPrime[0] = isPrime[1] = false; // 소수 아님

  for (let i = 2; i * i <= max; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= max; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime;
}

const sieves = sieve(1000000);

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

const T = input[0];
const result = [];

for (let i = 1; i <= T; i++) {
  // n = p + q (p는 n/2까지)
  const n = input[i];
  let count = 0;

  // 소수 찾기: 2부터 시작
  for (let j = 2; j <= Math.floor(n / 2); j++) {
    // p가 소수 -> n - p가 소수 -> 카운트 증가
    if (sieves[j] & sieves[n - j]) count++;
  }

  result.push(count);
}

console.log(result.join("\n"));
