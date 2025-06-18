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

const [N, k] = input[0].split(" ").map(Number);

const sortedArr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

console.log(sortedArr[k - 1]);
