const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";

const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(inputPath).toString().replace(/\r/g, "").trim();

const [N, B] = input.split(" ").map(Number);

// 10진법의 수 N을 B진법으로 변환
// 주의) 알파벳은 대문자로 변환
const converted = N.toString(B).toUpperCase();

console.log(converted);
