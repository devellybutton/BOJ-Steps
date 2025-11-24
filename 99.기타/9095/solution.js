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

const T = input[0];

for (let i = 1; i <= T; i++) {

    const n = input[i];
    const dp = Array(n + 1); // 0부터 시작하므로

    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2; // 1 + 1, 2
    dp[3] = 4 // 1 + 2, 2 + 1, 1 + 1 + 1, 3

    for (let j = 4; j <= input[i]; j++) {
        // dp[j]는 j를 1, 2, 3의 합으로 나타내는 방법 수
        dp[j] = dp[j - 1] + dp[j - 2] + dp[j - 3]
    }

    console.log(dp[n])
}