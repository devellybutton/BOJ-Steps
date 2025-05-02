// 11659번. 구간 합 구하기 4
// 시간 초과

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

const subArr = [];

// 주의: 구해야하는 쿼리는 M개이고, 인덱스 2부터 시작하므로 2 + M
for (let i = 2; i < 2 + M; i++) {
  subArr.push(input[i].split(" ").map(Number));
}

function getSubSum(inputArr) {
  let [start, end] = inputArr;
  let subSum = 0;

  for (let i = start - 1; i <= end - 1; i++) {
    subSum += arr[i];
  }
  return subSum;
}

const result = [];

subArr.forEach((el) => {
  result.push(getSubSum(el));
});

console.log(result.join('\n'));