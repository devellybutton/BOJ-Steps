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

console.log(input);
const result = [];

for (const number of input) {
  result.push(number);
}

const max = Math.max(...result);
const rank = result.indexOf(max) + 1;

console.log([max, rank].join("\n"));
