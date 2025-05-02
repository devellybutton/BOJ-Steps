const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";
const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(inputPath).toString().trim();

const N = parseInt(input);
let result = "";

for (let i = 1; i <= N; i++) {
  result += "*".repeat(i);
  if (i !== N) result += "\n";
}

console.log(result);
