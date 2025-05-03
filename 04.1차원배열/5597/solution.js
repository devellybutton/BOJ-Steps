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

const check = new Map();

for (const number of input) {
  check.set(number, (check.get(number) || 0) + 1);
}

const result = [];
for (let i = 1; i <= 30; i++) {
  if (!check.has(i)) result.push(i);
}

result.sort((a, b) => a - b);
console.log(result.join('\n'))