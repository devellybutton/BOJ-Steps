// 2908번. 상수

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

const [A, B] = input[0].split(" ");

const reversedA = A.split('').reverse().join('');
const reversedB = B.split('').reverse().join('');

const result = Math.max(parseInt(reversedA), parseInt(reversedB));

console.log(result);
