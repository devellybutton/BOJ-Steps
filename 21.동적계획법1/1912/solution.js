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

const N = Number(input[0]);

const arr = input.slice(1)[0].split(" ").map(Number);

const dp = Array(N).fill(0);

dp[0] = arr[0];
let maxSum = dp[0];

// dp는 인덱스 i 에 있는 원소까지의 합
// 전까지의 합 + 현재 합 vs 현재 원소만
// 개수를 모름 -> 슬라이딩 윈도우 불가

for (let i = 1; i < N; i++) {
  dp[i] = Math.max(arr[i], dp[i - 1] + arr[i]);
  maxSum = Math.max(maxSum, dp[i]);
}

console.log(maxSum);
