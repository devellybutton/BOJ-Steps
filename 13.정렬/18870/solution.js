// 18870. 좌표 압축
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

const N = parseInt(input[0]);

const arr = input[1].split(" ").map(Number);

function coordinateCompression(array) {
  const sortedIndices = [...new Set(array)].sort((a, b) => a - b);
  return array.map((num) => sortedIndices.indexOf(num));
}

console.log(coordinateCompression(arr).join(" "));

// indexOf는 선형 탐색이라서 O(배열 길이)
// 전체: O(n²) (indexOf => map)
