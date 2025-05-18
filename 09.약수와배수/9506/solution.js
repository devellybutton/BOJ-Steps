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

function isPerfect(n) {
  const divisors = [1];

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divisors.push(i);
      // 제곱근이 아닌 경우
      // n으로 나눴을 때의 수도 같이 넣어줌
      if (i !== n / i) {
        divisors.push(n / i);
      }
    }
  }

  divisors.sort((a, b) => a - b);

  const divisorSum = divisors.reduce((sum, divisor) => sum + divisor, 0);

  return {
    isPerfect: divisorSum === n,
    divisors,
  };
}

let result = [];
for (let i = 0; i < input.length; i++) {
  const n = input[i];

  if (n === -1) break;

  const perfectResult = isPerfect(n);

  if (perfectResult.isPerfect) {
    result.push(`${n} = ${perfectResult.divisors.join(" + ")}`);
  } else {
    result.push(`${n} is NOT perfect.`);
  }
}

console.log(result.join("\n"));
