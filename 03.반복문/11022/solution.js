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

for (let i = 1; i <= N; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  console.log(`Case #${i}: ${A} + ${B} = ${A + B}`);
}
