const fs = require("fs");
const os = require("os");
const { parse } = require("path");

const isLinux = os.platform() === "linux";

const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(inputPath)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const board = input.slice(1);

let minRepaint = Infinity;

// 바깥쪽 8x8
for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    // console.log(`현재 8X8 시작 좌표: ${i}, ${j}`);

    let repaintW = 0;
    let repaintB = 0;

    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        const current = board[x + i][y + j];
        // 왼쪽 위 (시작지점)이 W -> W, B -> B
        const shouldW = (x + y) % 2 === 0 ? "W" : "B";
        const shouldB = (x + y) % 2 === 0 ? "B" : "W";

        if (current !== shouldW) repaintW++;
        if (current !== shouldB) repaintB++;
      }
    }

    minRepaint = Math.min(minRepaint, repaintW, repaintB)
  }
}

console.log(minRepaint)