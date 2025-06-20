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
const arr = input.slice(1);
const sortedArr = arr.slice().sort((a, b) => a - b);

console.log(sortedArr.join("\n"));
