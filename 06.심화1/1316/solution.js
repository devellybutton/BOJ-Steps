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

const N = input[0];

let groupWord = 0;

for (let i = 1; i < input.length; i++) {
  const word = input[i].split("");
  const wordSet = new Set(word);

  const arr = [];

  for (let i = 0; i < word.length; i++) {
    if (i === 0) arr.push(word[i]);
    if (i !== 0 && word[i - 1] !== word[i]) {
      arr.push(word[i]);
    }
  }

  // console.log(wordSet);
  // console.log(arr);

  if (wordSet.size === arr.length) groupWord += 1;
}

console.log(groupWord);
