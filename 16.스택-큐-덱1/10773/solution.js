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

const N = input[0];
const stack = [];
const inputList = input.slice(1);

for (const number of inputList) {
  if (number === 0 && stack.length > 0) stack.pop();
  else stack.push(number);
}

const sumOfStack = stack.reduce((acc, cur) => +cur + acc, 0);
console.log(sumOfStack);
