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

const N = parseInt(input[0]);
const papers = input[1].split(" ").map(Number);

// 배열을 사용한 효율적인 구현
const balloons = [];
for (let i = 0; i < N; i++) {
  balloons.push({
    number: i + 1,
    value: papers[i]
  });
}

const result = [];
result.push(balloons[0].number);
let move = balloons[0].value;
balloons.splice(0, 1);

let currentIndex = 0;
while (balloons.length > 0) {
  // 이동할 인덱스 계산
  if (move > 0) {
    currentIndex = (currentIndex + move - 1) % balloons.length;
    if (currentIndex < 0) currentIndex += balloons.length;
  } else {
    currentIndex = (currentIndex + move) % balloons.length;
    if (currentIndex < 0) currentIndex += balloons.length;
  }
  
  // 현재 풍선 터뜨리기
  result.push(balloons[currentIndex].number);
  move = balloons[currentIndex].value;
  balloons.splice(currentIndex, 1);
  
  // 배열이 비었으면 종료
  if (balloons.length === 0) break;
  
  // 마지막 요소를 제거한 경우 인덱스 조정
  if (currentIndex === balloons.length) {
    currentIndex = 0;
  }
}

console.log(result.join(" "));