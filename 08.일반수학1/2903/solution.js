const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";

const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(inputPath).toString().replace(/\r/g, "").trim();

const N = Number(input);

const answer = (Math.pow(2, N) + 1) * (Math.pow(2, N) + 1);

console.log(answer);
