class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    if (this.stack.length === 0) return -1;
    return this.stack.pop();
  }

  size() {
    return this.stack.length;
  }

  isEmpty() {
    return this.stack.length === 0 ? 1 : 0;
  }

  top() {
    if (this.stack.length === 0) return -1;
    return this.stack[this.stack.length - 1];
  }
}

const stack = new Stack();

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

const N = Number(input[0]);
const result = [];

for (let i = 1; i <= N; i++) {
  const numbers = input[i].split(" ").map(Number);
  if (numbers[0] === 1) stack.push(numbers[1]);
  else if (numbers[0] === 2) result.push(stack.pop());
  else if (numbers[0] === 3) result.push(stack.size());
  else if (numbers[0] === 4) result.push(stack.isEmpty());
  else result.push(stack.top());
}

console.log(result.join("\n"));
