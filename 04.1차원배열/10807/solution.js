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

const N = parseInt(input[0]);
const V = parseInt(input[2]);
const arr = input[1].split(" ").map(Number);
let count = 0;

for (const number of arr) {
  if (number === V) count++;
}

console.log(count)