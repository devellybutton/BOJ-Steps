// 18870. 좌표 압축

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

// 좌표압축 => 값대신 인덱스 반환
function coordinateCompression(array) {
  const sortedUnique = [...new Set(array)].sort((a, b) => a - b);
  const indexMap = new Map();

  // array의 값에서 인덱스 추출하여 Map에 넣기
  sortedUnique.forEach((value, index) => {
    indexMap.set(value, index);
  });

  // array 순회하며 숫자 num의 인덱스값 반환
  return array.map((num) => indexMap.get(num));
}

console.log(coordinateCompression(arr).join(" "));

// 전체: O(n + k log k) = O(n log n)
