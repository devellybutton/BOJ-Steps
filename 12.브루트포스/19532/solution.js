const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";
const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(inputPath).toString().trim();

const [a, b, c, d, e, f] = input.split(" ").map(Number);

let foundX;
let foundY;

for (let x = -999; x <= 999; x++) {
  for (let y = -999; y <= 999; y++) {
    if (a * x + b * y === c && d * x + e * y === f) {
      foundX = x;
      foundY = y;
      break;
    }
  }

  if (foundX !== undefined) {
    break;
  }
}

console.log(foundX, foundY);
