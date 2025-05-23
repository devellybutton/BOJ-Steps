const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";

const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(inputPath)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n")
  .map(Number);

const [M, N] = input;

let sum = 0; // 합
let min = 0; // 최솟값
const primeNumbers = []; // 소수 배열

for (let i = M; i <= N; i++) {
  if (i < 2) continue; // 1은 소수가 아님 
  
  let isPrime = true;
  // 소수: 1과 자기 자신만 약수로 갖는 수
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) primeNumbers.push(i);
}

sum = primeNumbers.reduce((cur, acc) => acc + +cur, 0);
min = Math.min(...primeNumbers);

if (primeNumbers.length === 0) min = -1;

const output = [];
if (sum !== 0) output.push(sum);
output.push(min);

console.log(output.join("\n"));
