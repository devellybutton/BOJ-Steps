const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";

const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(inputPath).toString().replace(/\r/g, "").trim();

const X = Number(input);

// 1 + 2 + 3 + 4 + 5
// 14를 예로 들면 5번째 줄에서 10과 15 사이에 있음

let layer = 1; // 층은 1층부터
let sum = 0; // 누적합은 0부터

// X가 몇 층에 있는지 구하기 (layer)
while (sum < X) {
  sum += layer; // 현재 층 수만큼 증가
  if (sum >= X) break; // 반복문 종료시에는 증가 X
  layer++;
}

// 지그재그라서 방향이 다름
// 홀수: -->
// 짝수: <-- 

let numerator; // 분자
let denominator; // 분모

// 5/1 4/2 3/3 2/4 1/5
// X는 5개 중에서 어디에 있는지
// layer - (sum - X)
// 5 - (15 - 14) ===> 4번째에 있음 

let position = layer - (sum - X);

if (layer % 2 === 1) { // 홀수층
  numerator = layer - position + 1;
  denominator = position;
} else { // 짝수층
  numerator = position
  denominator = layer - position + 1;
}

console.log(`${numerator}/${denominator}`);
