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

const N = Number(input[0]);

const arr = input.slice(1);
const dancers = new Set(["ChongChong"]);

for (let couple of arr) {
  const [A, B] = couple.split(" ");
  if (dancers.has(A)) {
    dancers.add(B);
  } else if (dancers.has(B)) {
    dancers.add(A);
  }
}

console.log(dancers.size);
