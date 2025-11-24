const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";

const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(inputPath)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n")
  .map(Number);

for (let t = 0; (t = input.length - 1); t++) {
  const dp = Array(t);
  const n = t;
  for (let i = 1; i < n; i++) {
    dp[i] = dp[0][i - 1] + dp[1][i - 1] + dp[2][i - 1]
  }
}
