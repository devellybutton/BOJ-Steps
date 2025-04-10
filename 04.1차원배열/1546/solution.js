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
const inputList = input[1];

const originalScores = inputList.split(" ").map(Number);
const M = Math.max(...originalScores);

// 점수/M*100
const newScore = [];

for (let i = 0; i < N; i++) {
  const score = (originalScores[i] / M) * 100;
  newScore.push(score);
}

const sum = newScore.reduce((acc, cur) => acc + +cur, 0);
const average = sum / N;

console.log(average);
