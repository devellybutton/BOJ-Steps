const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";

const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(inputPath).toString().replace(/\r/g, "").trim();

const N = Number(input);

// 1 - +6 -> 7 - +12 -> 19 - +18 -> 37

let count = 1; // 시작하는 방 번호 (1, 7, 19, 37)
let layer = 1; // 벌집의 층 (1층은 6, 2층은 12 ...) 

while (count < N) {
  count += 6 * layer
  layer++; 
}

console.log(layer)