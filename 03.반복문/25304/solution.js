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

const X = Number(input[0]); // 영수증 금액
const N = Number(input[1]); // 구매한 물건 종류의 수

let total = 0;
for (let i = 2; i < 2 + N; i++) {
  const [price, count] = input[i].split(' ').map(Number);
  totalPrice = price * count;
  total += totalPrice;
}

console.log(X === total ? "Yes" : "No");
