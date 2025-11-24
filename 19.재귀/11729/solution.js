const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";

const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(inputPath).toString().replace(/\r/g, "").trim();

const N = Number(input);

/**
 * 
 * 첫 번째 식 = N−1개를 2번째 기둥으로 이동
 * 가운데 식 = 가장 큰 원판 1개를 3번째 기둥으로 이동 (단 한 번!)
 * 세 번째 식 = N−1개를 3번째 기둥으로 이동
 */

// 2개
// 1 -> 2 (작은게 두번째)
// 1 -> 3 (마지막 원판이 3번째)
// 2 -> 3 (작은게 세번째)

// 번호 / 위치
// 1 -> 3
// 1 -> 2
// 3 -> 2
// 1 -> 3
// 2 -> 1
// 2 -> 3
// 1 -> 3

const result = [];

function hanoi(n, from, to, via) {
  if (n === 1) {
    result.push([from, to].join(" "));
    return;
  }

  hanoi(n - 1, from, via, to);
  result.push([from, to].join(" "));
  hanoi(n - 1, via, to, from);
}

hanoi(N, 1, 3, 2);

console.log(result.length);
console.log(result.join("\n"));
