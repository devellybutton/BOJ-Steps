// 5073번. 삼각형과 세 변

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

// 삼각형 분류
function classifyTriangle(a, b, c) {
  // 세 변을 내림차순 정렬
  const [x, y, z] = [a, b, c].sort((a, b) => b - a);

  // 가장 긴 변 < 나머지 두 변의 합
  if (x >= y + z) return "Invalid";
  else {
    if (a === b && b === c) return "Equilateral";
    if (a === b || b === c || c === a) return "Isosceles";
    else return "Scalene";
  }
}

const result = [];

// 입력을 포맷팅
// [ '7 7 7', '6 5 4', '3 2 5', '6 2 6', '0 0 0' ]
for (let i = 0; i < input.length; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);

  // 종료 조건
  if (a === b && b === c && c === a && a === 0) break;

  // 삼각형 분류해서 결과값 집어넣기
  result.push(classifyTriangle(a, b, c));
}

console.log(result.join("\n"));
