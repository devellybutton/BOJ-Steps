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

function countingSort() {
  const offset = 1000000;
  const range = 2000001;
  const count = new Array(range).fill(0);

  // 각 수의 존재 여부 체크 (중복 없으므로 0 또는 1)
  for (const num of arr) {
    count[num + offset] = 1;
  }

  // 결과 출력
  const result = [];
  for (let i = 0; i < range; i++) {
    if (count[i] === 1) {
      result.push(i - offset);
    }
  }

  return result;
}

const sortedArr = countingSort(arr);
console.log(sortedArr.join("\n"));
