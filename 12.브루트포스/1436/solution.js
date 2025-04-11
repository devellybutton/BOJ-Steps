const fs = require("fs");
const os = require("os");
const { parse } = require("path");

const isLinux = os.platform() === "linux";

const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(inputPath).toString().replace(/\r/g, "").trim();
const N = parseInt(input);

// 666부터 시작해서 N번째 수를 찾는다.
let count = 0; // N번째 수
let number = 665; // 찾고 싶은 종말의 숫자

// i가 10000까지인 for문은 의미가 없음.
// count === N일때 종료
while (count < N) {
  number++;
  if (String(number).includes("666")) count++;
}

console.log(number);
