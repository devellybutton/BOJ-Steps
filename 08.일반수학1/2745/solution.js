const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";

const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(inputPath).toString().replace(/\r/g, "").trim();

const [N, B] = input.split(" ");

// B진법 수 N을 10진법으로 변환
const base = parseInt(B); // 정수로 형변환
const decimal = parseInt(N, base); // base진법 문자열 N을 10진법으로 변환 

console.log(decimal);
