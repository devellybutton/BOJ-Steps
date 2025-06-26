const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";

const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(inputPath)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n");

const count = Number(input[0]);

const divisors = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let result = 0;
if (divisors.length % 2 !== 0) {
  // 가운데수 제곱
  const idx = Math.floor(divisors.length / 2);
  result = Math.pow(divisors[idx], 2);
} else {
  // 맨 뒤 x 맨 앞
  result = divisors[divisors.length - 1] * divisors[0];
}

console.log(result);
