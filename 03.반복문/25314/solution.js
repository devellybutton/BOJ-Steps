const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";

const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(inputPath).toString().replace(/\r/g, "").trim();
const N = parseInt(input);

const longCount = Math.floor(N / 4);
console.log("long ".repeat(longCount) + "int");
