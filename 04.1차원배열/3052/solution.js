// 3052번. 나머지

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

const result = [];
for (let i = 0; i < input.length; i++) {
  const remain = input[i] % 42;
  result.push(remain);
}

const set = new Set(result);
console.log(set.size)
