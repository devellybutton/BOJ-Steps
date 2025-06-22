// 1735. 분수 합

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

// 첫 번째 분수
const [a1, b1] = input[0].split(" ").map(Number);

// 두 번째 분수
const [a2, b2] = input[1].split(" ").map(Number);

// 최대공약수: 유클리드 호제법
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

// 두 분수의 합: a1/b1 + a2/b2

// 분자
let numerator = a1 * b2 + a2 * b1;
let denominator = b1 * b2;

// 기약분수 만들기
// 최대공약수로 나눈다
const commonDivisor = gcd(numerator, denominator);
numerator = Math.floor(numerator / commonDivisor);
denominator = Math.floor(denominator / commonDivisor);

console.log(numerator, denominator);
