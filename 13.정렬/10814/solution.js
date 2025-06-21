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

const N = parseInt(input[0]);
const arr = input
  .slice(1, N + 1)
  .map((el) => el.split(" "))
  .sort((a, b) => {
    if (parseInt(a[0]) !== parseInt(b[0]))
      return parseInt(a[0]) - parseInt(b[0]);
    else return 0;
  });

console.log(arr.map((el) => el.join(" ")).join("\n"));
