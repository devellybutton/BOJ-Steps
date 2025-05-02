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

const baskets = Array(N + 1)
  .fill()
  .map((_, i) => i);

for (let i = 1; i <= M; i++) {
  // A번째부터 B번째까지 역순으로 뒤집기
  const [A, B] = input[i].split(" ").map(Number);
  [baskets[A], baskets[B]] = [baskets[B], baskets[A]]
}

console.log(baskets.slice(1).join(" "));
