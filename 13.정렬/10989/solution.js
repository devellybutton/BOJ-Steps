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

// 중복 포함
function countingSort() {
  const range = 10000001; // 0 ~ 10,000,000
  const count = new Array(range).fill(0);

  // 각 수의 존재 여부 체크
  for (const num of arr) {
    count[num] = 1;
  }

  // 결과 출력
  const result = [];
  for (let i = 0; i < range; i++) {
    if (count[i] === 1) {
      result.push(i);
    }
  }

  return result;
}

const sortedArr = countingSort(arr);
console.log(sortedArr.join('\n')) 