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

const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
  let c = parseInt(input[i]);

  let quarter = Math.floor(c / 25);
  c %= 25;

  let dime = Math.floor(c / 10);
  c %= 10;

  let nickel = Math.floor(c / 5);
  c %= 5;

  let penny = c;

  console.log(`${quarter} ${dime} ${nickel} ${penny}`);
}
