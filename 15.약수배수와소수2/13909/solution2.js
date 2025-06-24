// 13909. 창문 닫기

/**
 * 원래 닫힘 -> 열려있음 (모든 수는 1의 배수, 1부터 시작)
 * 각자 본인 배수의 창문을 닫음
 *
 * 4의 경우 약수가 1(열림), 2(닫힘), 4(열림)
 * 6의 경우 약수가 1(열림), 2(닫힘), 3(열림), 6(닫힘)
 * 이런식으로 약수의 개수가 홀수가 되면 열려 있음
 */

const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";

const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(inputPath).toString().replace(/\r/g, "").trim();

const N = parseInt(input);

// 풀이 1.
// 직접 세기
let count = 0;
for (let i = 1; i * i <= N; i++) {
  count++;
}

console.log(count);

// 풀이 2.
// 1부터 N까지의 완전제곱수 개수 = ⌊√N⌋
// console.log(Math.floor(Math.sqrt(count)));
