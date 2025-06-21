// 14215번. 세 막대

const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";
const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(inputPath).toString().replace(/\r/g, "").trim();

const [a, b, c] = input.split(" ").map(Number);

let circum;

// 1) 오름차순 정렬
const [x, y, z] = [a, b, c].sort((a, b) => a - b);

// 2) x + y > z  -> 둘레 길이
// 3) x + y <= z  -> 줄이기
// z = x + y - 1
if (x + y > z) {
  circum = x + y + z;
} else {
  let newZ = x + y - 1;
  circum = x + y + newZ;
}

console.log(circum);
