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

const arr = input[0].toUpperCase().split("");

const wordCount = new Map();
const maxValues = [];

for (const letter of arr) {
  wordCount.set(letter, (wordCount.get(letter) || 0) + 1);
}

let maxValue = Math.max(...wordCount.values());

for (const [key, value] of wordCount.entries()) {
  if (value === maxValue) {
    maxValues.push([key, value]);
  }
}

console.log(maxValues.length > 1 ? "?" : maxValues[0][0]);
