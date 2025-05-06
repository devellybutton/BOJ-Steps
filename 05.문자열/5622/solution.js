const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";
const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(inputPath).toString().replace(/\r/g, "").trim();

const arr = input.split("");
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let seconds = 0; // 다이얼 전체 걸리는 시간

// 인덱스 값을 3으로 나눴을 때 몫 + 1
// 나머지는 규칙 깨지는 시점부터 직접 더해주기
for (let i = 0; i < arr.length; i++) {
  const alphabetIndex = alphabet.indexOf(arr[i]);
  if (alphabetIndex >= 15 && alphabetIndex <= 18) {
    seconds += 8;
  } else if (alphabetIndex >= 19 && alphabetIndex <= 21) {
    seconds += 9;
  } else if (alphabetIndex >= 22 && alphabetIndex <= 25) {
    seconds += 10;
  } else {
    seconds += Math.trunc(alphabetIndex / 3) + 3;
  }
}

console.log(seconds);
