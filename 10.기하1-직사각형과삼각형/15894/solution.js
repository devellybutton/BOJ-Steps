// 15894번. 수학은 체육과목 입니다

const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";
const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(inputPath).toString().replace(/\r/g, "").trim();

const n = Number(input);

// 1 -> 4 
// 2 -> 8 
// 3 -> 12 

console.log(n * 4)
