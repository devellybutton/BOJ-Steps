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

const N = parseInt(input); // 설탕 무게

let five_bags = Math.floor(N / 5); // 현재 사용중인 5kg 봉지 개수
let remaining = N - five_bags * 5;
let three_bags = 0; // 현재 사용중인 3kg 봉지 개수
let result = -1; // 최종적으로 필요한 봉지 개수

while (five_bags >= 0) {
  if (remaining % 3 === 0) {
    three_bags = remaining / 3;
    result = five_bags + three_bags;
    break;
  }

  five_bags--;
  remaining = N - five_bags * 5;
}

console.log(result);
