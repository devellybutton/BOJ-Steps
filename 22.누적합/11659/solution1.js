// 11659번. 구간 합 구하기 4

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
const arr = input[1].split(" ").map(Number);

// 누적합 배열 계산
const prefixSum = [0];
for (let i = 0; i < N; i++) {
  prefixSum.push(prefixSum[i] + arr[i]);
}

const results = [];
for (let i = 2; i < 2 + M; i++) {
  const [start, end] = input[i].split(' ').map(Number);
  results.push(prefixSum[end] - prefixSum[start - 1]);
}

console.log(results.join("\n"));
// prefixSum[end] : 0번째부터 end까지 합
// prefixSum[start - 1] : 0번째부터 start-1까지 합
// 그럼 start부터 end번째까지 합은 둘을 빼면 됨
