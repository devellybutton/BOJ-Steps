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

const [N, K] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let count = 0;
let swapHistory = [];

function swap(array, i, j) {
  if (count === K) {
    swapHistory = [array[i], array[j]];
  }

  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;

  count++;

  // 주의: arr[i]와 arr[j]를 교환한 상태임.
}

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIndex = start;

  // 피벗을 순회하며 피벗보다 작은 값은 왼쪽으로 이동시킴
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  swap(arr, start, swapIndex);
  return swapIndex;
}

function quickSort(arr, left, right) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

quickSort(arr, 0, arr.length - 1);

console.log(swapHistory.length > 0 ? swapHistory.join(" ") : -1);
