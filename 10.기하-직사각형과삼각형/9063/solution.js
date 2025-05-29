// 9063번. 대지

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

// 점이 1개면 넓이는 0
if (N === 1) {
  console.log(0);
} else {
  let minX = Infinity,
    maxX = -Infinity;
  let minY = Infinity,
    s;
  maxY = -Infinity;

  // 모든 점 확인하면서 최솟값 최댓값 찾기
  for (let i = 1; i <= N; i++) {
    const [x, y] = input[i].split(" ").map(Number);

    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);
  }

  // 직사각형의 가로, 세로 길이 계산
  const width = maxX - minX;
  const height = maxY - minY;

  // 넓이 = 가로 x 세로
  const area = width * height;

  console.log(area);
}
