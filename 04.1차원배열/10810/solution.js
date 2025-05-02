// 10810번. 공 넣기

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

const [N, M] = input[0].split(" ").map(Number);
const arr = Array.from({ length: N + 1 }).fill(0);

for (let i = 1; i <= M; i++) {
  const [A, B, C] = input[i].split(" ").map(Number);

  for (let j = A; j <= B; j++) {
    arr[j] = C;
  }
}

console.log(arr.slice(1).join(" "));
