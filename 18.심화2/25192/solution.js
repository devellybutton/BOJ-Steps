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

const N = Number(input[0]);

let count = 0;

// enter 이후에 나오는 것들을 set 안에 넣고
// set 안에 있는 개수를 count에 추가한다
const names = new Set();

for (let i = 1; i < input.length; i++) {
  if (input[i] === "ENTER") {
    // count에다가 names 배열의 길이 넣어줌
    count += names.size;
    // names 배열 초기화
    names.clear();
  } else {
    names.add(input[i]);
  }
}

// 만약 ENTER가 맨 처음에만 등장하는 경우 names.size가 count에 반영되지 않음
// 마지막으로 name 안에 있는 원소의 개수를 count에 반영
count += names.size;
console.log(count);
