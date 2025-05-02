const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";

const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(inputPath)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("");
  
let result = 1;
const N = Math.floor(input.length / 2);

for (let i = 0; i < N; i++) {
  if (input[i] !== input[input.length - i - 1]) {
    result = 0;
    break;
  }
}

console.log(result);
