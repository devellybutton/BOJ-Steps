// 10101번. 삼각형 외우기

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

function classifyTriangle(arr) {
  const [a, b, c] = arr;
  const sum = a + b + c;

  if (sum !== 180) return "Error";
  if (a === b && b === c && c === a && a === 60) return "Equilateral";
  if (sum === 180 && (b === c || a === c)) return "Isosceles";
  if (sum === 180 && a !== b && b !== c && c !== a) return "Scalene";
}

console.log(classifyTriangle(input))