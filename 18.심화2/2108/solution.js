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

const N = input[0];
const arr = input.slice(1).sort((a, b) => a - b);

// 산술평균
function getAverage(arr) {
  const sum = arr.reduce((acc, cur) => cur + acc, 0);
  const average = sum / N;
  return Math.round(average, 1);
}

// 중앙값
function getMedian(arr) {
  const mid = Math.floor(N / 2);
  if (N % 2 === 1) {
    median = arr[mid];
  } else {
    median = (arr[mid - 1] + arr[mid]) / 2;
  }
  return median;
}

// 최빈값
function getMode(arr) {
  const count = new Map();
  for (let num of arr) {
    count.set(num, (count.get(num) || 0) + 1);
  }

  // 최댓값 구하기
  const maxCount = Math.max(...count.values());

  const modes = [];
  for (let [num, freq] of count.entries()) {
    if (freq === maxCount) modes.push(num);
  }

  return modes.length === 1 ? modes[0] : modes[1];
}

// 범위
function getRange(arr) {
  return Math.max(...arr) - Math.min(...arr);
}

const result = [getAverage(arr), getMedian(arr), getMode(arr), getRange(arr)];
console.log(result.join("\n"));
