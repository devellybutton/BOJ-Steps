const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";
const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(inputPath).toString().trim();

const N = parseInt(input);
let result = "";

for (let i = 1; i <= N; i++) {
  result += " ".repeat(N - i) + "*".repeat(2 * i - 1);
  if (i !== N) result += "\n";
}
for (let i = N - 1; i >= 1; i--) {
  result += "\n" + " ".repeat(N - i) + "*".repeat(2 * i - 1);
}

console.log(result);
