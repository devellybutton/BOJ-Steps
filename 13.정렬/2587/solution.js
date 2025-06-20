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

function getAverage(arr) {
  const n = arr.length;
  const sum = arr.reduce((acc, cur) => +cur + acc, 0);
  return sum / n;
}

function getMedian(arr) {
  const n = arr.length;
  const sortedArr = arr.sort();
  // n이 짝수
  if (n % 2 === 0) {
    return (sortedArr[n / 2] + sortedArr[n / 2 + 1]) / 2
  } else {
    // n이 홀수
    return sortedArr[(n + 1) / 2 - 1];
  }
}

console.log(getAverage(input));
console.log(getMedian(input));
