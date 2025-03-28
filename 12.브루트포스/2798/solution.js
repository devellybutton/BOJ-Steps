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

const [N, M] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// 3중 반복문으로 돌린다
let maxSum = -Infinity;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    for (let k = j + 1; k < arr.length; k++) {
      let sum = arr[i] + arr[j] + arr[k];
      if (sum <= M) maxSum = Math.max(maxSum, sum);
      else continue;
    }
  }
}

console.log(maxSum)