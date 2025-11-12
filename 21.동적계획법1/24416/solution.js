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
const memo = {};

// 재귀 호출
function fibMemo(n, memo = {}) {
  if (n === 1 || n === 2) return 1;
  if (memo[n]) return memo[n];
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

// 동적프로그래밍
function fibDp(n) {
  const dp = Array(n + 1).fill(0);
  let count = 0;

  dp[1] = dp[2] = 1;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
    count++;
  }

  return count;
}

console.log(fibMemo(N, memo), fibDp(N));
