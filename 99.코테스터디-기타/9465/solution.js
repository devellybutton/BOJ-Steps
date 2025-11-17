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

const T = Number(input[0]);
const results = [];

let idx = 1;
let result = 0;

for (let t = 0; t < T; t++) {
  const n = Number(input[idx]);
  idx++;

  const row0 = input[idx].split(" ").map(Number);
  idx++;

  const row1 = input[idx].split(" ").map(Number);
  idx++;

  let dp = [Array(n).fill(0), Array(n).fill(0), Array(n).fill(0)];
  dp[0][0] = 0; // 0열에서 선택 안 함.
  dp[1][0] = row0[0]; // 0열에서 0행 선택 (위)
  dp[2][0] = row1[0]; // 0열에서 1행 선택 (아래)

  // X열에서
  // dp[0][X]: 선택 안 함
  // dp[1][X]: 0행 선택
  // dp[2][X]: 1행 선택
  for (let i = 1; i < n; i++) {
    dp[0][i] = Math.max(dp[0][i - 1], dp[1][i - 1], dp[2][i - 1]);

    dp[1][i] = Math.max(dp[0][i - 1], dp[2][i - 1]) + row0[i]; // 위 (0행)

    dp[2][i] = Math.max(dp[0][i - 1], dp[1][i - 1]) + row1[i]; // 아래 (1행)
  }

  result = Math.max(dp[0][n - 1], dp[1][n - 1], dp[2][n - 1]);

  results.push(result);
}

console.log(results.join("\n"));