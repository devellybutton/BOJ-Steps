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

const arr = input.slice(1).map(Number);

const N = Number(input[0]);

const dp = Array(N).fill(0);

// dp[i]는 input 배열의 i번째 원소에서 포도주를 마실 수 있는 최대 양
// 연달아 세 개 불가능 
// 현재 잔을 마신다는 가정에서 i-1과 i-2의 
// i-2, i-1, i
// i-2, 건너뛰기, i
// i-3, 건너뛰기, i-1, i

dp[0] = arr[0];
dp[1] = arr[0] + arr[1];

for (let i = 2; i < N; i++) {
  dp[i] = Math.max(arr[i] + dp[i - 2], dp[i - 1], (dp[i - 3] || 0) + arr[i - 1] + arr[i]);
}

console.log(dp[N-1]);
