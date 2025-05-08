// 앞 뒤에 공백 추가해야되는 줄 알고 출력해서 출력초과 뜸

const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";
const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(inputPath).toString().trim();

const N = parseInt(input);
let result = "";

for (let i = 1; i <= N; i++) {
  result += " ".repeat(Math.floor((2 * N - 1) - (2 * i - 1) / 2));
  result += "*".repeat(2 * i - 1);
  result += " ".repeat(Math.floor((2 * N - 1) - (2 * i - 1) / 2));
  if (i !== N) result += "\n";
}
for (let i = N - 1; i >= 1; i--) {
  if (i == N - 1) result += "\n";
  result += " ".repeat(Math.floor((2 * N - 1) - (2 * i - 1) / 2));
  result += "*".repeat(2 * i - 1);
  result += " ".repeat(Math.floor((2 * N - 1) - (2 * i - 1) / 2));
  if (i !== 1) result += "\n";
}

console.log(result);