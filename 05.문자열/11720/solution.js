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

const N = input[0];
const arr = input[1].split('');
const sum = arr.reduce((acc, cur) => acc + +cur, 0);

console.log(sum);
