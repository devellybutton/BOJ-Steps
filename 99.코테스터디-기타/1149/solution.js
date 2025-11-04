const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";

const inputPath = isLinux ? "/dev/stdin" : "./input1.txt";

const input = fs
  .readFileSync(inputPath)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n");

const N = Number(input[0]);

const cost = input.slice(1).map((row) => row.split(" ").map(Number));

// 그리디로 접근하려니까 답이 안 나옴.
// 이전 선택이 이후에 영향을 줌.

// 현재 비용 = 이전 집 상태 중 가능한 것 + 현재 비용

dp = Array.from({ length: N }, () => Array(3).fill(0));

dp[0][0] = cost[0][0];
dp[0][1] = cost[0][1];
dp[0][2] = cost[0][2];

for (i = 1; i < N; i++) {
  dp[i][0] = cost[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
  dp[i][1] = cost[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
  dp[i][2] = cost[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
}

// 구하려는 것
console.log(Math.min(dp[N - 1][0], dp[N - 1][1], dp[N - 1][2]));
