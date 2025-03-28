const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";

const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const N = Number(
  fs.readFileSync(inputPath).toString().replace(/\r/g, "").trim().split("\n")
);

function decompositionSum(num) {
  const digits = num.toString().split("").map(Number);
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    sum += digits[digits.length - 1 - i] * 10 ** i;
  }

  const sumOfDigits = digits.reduce((acc, cur) => cur + acc, 0);
  return sum + sumOfDigits;
}

let answer = 0;

for (let i = 1; i < N; i++) {
  if (decompositionSum(i) === N) {
    answer = i; 
    break;
  }
}

console.log(answer)
