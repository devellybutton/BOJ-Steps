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
const result = [];
const numbers = input[1].split(" ").map(Number);
result.push(Math.min(...numbers), Math.max(...numbers));

console.log(result.join(" "));
