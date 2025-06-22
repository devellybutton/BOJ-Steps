// 2485. 가로수

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
const arr = input.slice(1);

// 최대공약수
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

// 배열 모든 원소의 최대 공약수
function gcdArray(arr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result = gcd(result, arr[i]);
    if (result === 1) break;
  }
  return result;
}

const intervals = [];

for (let i = 0; i < N - 1; i++) {
  intervals.push(arr[i + 1] - arr[i]);
}

const gcdResult = gcdArray(intervals);
let treeCount = 0;

for (let i = 0; i < intervals.length; i++) {
  treeCount += Math.floor(intervals[i] / gcdResult) - 1;
}

console.log(treeCount);
