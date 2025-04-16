const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";
const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(inputPath).toString().trim();

const [a, b, c, d, e, f] = input.split(" ").map(Number);

// 크라메르 공식 적용
const denominator = a * e - b * d;
const numeratorX = c * e - b * f;
const numeratorY = a * f - c * d;

// 정수 결과 보장
const x = parseInt(numeratorX / denominator);
const y = parseInt(numeratorY / denominator);

console.log(x, y);