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

const [N, X] = input[0].split(" ").map(Number);
const result = [];

for (number of input[1].split(" ").map(Number)) {
  if (number < X) result.push(number);
}

console.log(result.join(" "));