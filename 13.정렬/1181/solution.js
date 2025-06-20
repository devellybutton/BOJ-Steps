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

// 중복 제거를 위해 set 사용 -> 배열 변환
const uniqueWords = [...new Set(input.slice(1))];

const arr = uniqueWords.sort((a, b) => {
  // 길이가 다르면 길이 순으로 정렬
  if (a.length !== b.length) {
    return a.length - b.length;
  } else {
    // 같으면 사전순
    return a.localeCompare(b);
  }
});

console.log(arr.join("\n"));
