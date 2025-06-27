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

const [N, M] = input[0].split(" ").map(Number);

const arr = input.slice(1);
const count = new Map();

for (let word of arr) {
  if (word.length < M) continue;
  else count.set(word, (count.get(word) || 0) + 1);
}

const sorted = [...count.entries()].sort((a, b) => {
  const [wordA, countA] = a;
  const [wordB, countB] = b;

  if (countA !== countB) return countB - countA;
  else if (wordA.length !== wordB.length) return wordB.length - wordA.length;
  else return wordA.localeCompare(wordB);
});

const results = [];
sorted.map(([word, _]) => results.push(word));

console.log(results.join("\n"));
