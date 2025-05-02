const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";
const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(inputPath).toString().trim().split('\n');

let result = [];
for (const numbers of input) {
  const [A, B] = numbers.split(" ").map(Number);
  result.push(A + B);
}

console.log(result.join("\n"));
