// 13909. 창문 닫기
// 아래 풀이 메모리 초과됨

const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";

const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(inputPath).toString().replace(/\r/g, "").trim();

const N = parseInt(input);

const arr = Array.from({ length: N + 1 }).fill(1);

for (let i = 2; i <= N; i++) {
  for (let j = 1; i * j <= N; j++) {
    // 0이면 -> 1로 바꿈.
    // 1이면 -> 0으로 바꿈.
    if (arr[i * j] !== 0) {
      arr[i * j] = 0;
    } else {
      arr[i * j] = 1;
    }
  }
}

const total = arr.slice(1).reduce((acc, cur) => cur + acc, 0);

console.log(total);
