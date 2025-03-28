const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";

const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const n = Number(
  fs.readFileSync(inputPath).toString().replace(/\r/g, "").trim()
);

function fibonacci(number) {
  if (number === 0) return 0;
  if (number === 1) return 1;
  return fibonacci(number-2) + fibonacci(number-1)
}

console.log(fibonacci(n));