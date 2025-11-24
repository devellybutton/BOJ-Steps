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

const triangle = input.slice(1).map((row) => row.split(" ").map(Number));

// 2차원 배열에서
// 현재 숫자의 최대합 = 이전 줄의 바로 위 둘 중 하나의 최댓값 + 현재 숫자

// dp[2][0] = dp[1][0]
// dp[2][1] = dp[1][0] 또는 dp[1][1]
// dp[2][2] = dp[1][1]

const dp = Array.from({ length: N }, () => Array(N).fill(0));
dp[0][0] = triangle[0][0];

for (let i = 1; i < N; i++) {
  for (let j = 0; j <= i; j++) {
    if (j === 0) {
      dp[i][j] = dp[i - 1][j] + triangle[i][j];
    } else if (j === i) {
      dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i][j];
    }
  }
}

console.log(Math.max(...dp[N - 1]));
