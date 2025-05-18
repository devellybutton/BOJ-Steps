const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";

const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(inputPath)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split(" ");

const [N, K] = input.map(Number);
const divisors = [];

for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    divisors.push(i);
  }
}

console.log(divisors[K - 1] ?? 0);
