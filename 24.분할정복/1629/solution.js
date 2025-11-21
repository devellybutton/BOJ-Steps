const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";

const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const [A, B, C] = fs
    .readFileSync(inputPath)
    .toString()
    .replace(/\r/g, "")
    .trim()
    .split(" ")
    .map(Number);

function divideConquer(a, b, c) {
    let result = 1;
    a = a % c;

    while (b > 0) {
        if (b % 2 === 1) {
            result = (result * a) % c;
        }
        a = (a * a) % c;
        b = Math.floor(b / 2);
    }

    return result;
}

console.log(divideConquer(A, B, C))