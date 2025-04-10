// 킹 1개, 퀸 1개, 룩 2개, 비숍 2개, 나이트 2개, 폰 8개

const [king, queen, rook, bishop, knight, pawn] = [1, 1, 2, 2, 2, 8];

const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";

const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(inputPath)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split(" ")
  .map(Number);

console.log(
  king - input[0],
  queen - input[1],
  rook - input[2],
  bishop - input[3],
  knight - input[4],
  pawn - input[5]
);
