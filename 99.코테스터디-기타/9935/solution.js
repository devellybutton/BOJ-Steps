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

const letters = input[0];
const target = input[1];

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const stack = new Stack();

const nL = letters.length;
const nT = target.length;

for (const c of letters) {
  // 글자 1개씩 스택에 넣기
  stack.push(c);
  // 만약 target의 길이보다 stack의 길이가 크거나 같을 경우
  // 이때부터 검사 시작
  if (stack.size() >= target.length) {
    let ok = true;

    // 검사 시작
    // 한 글자라도 다르면 반복문 탈출
    for (let i = 0; i < nT; i++) {
      if (stack.items[stack.size() - 1 - i] !== target[nT - 1 - i]) {
        ok = false;
        break;
      }
    }

    // 같은 글자의 개수만큼만 stack에서 꺼내기
    if (ok) {
      for (let j = 0; j < nT; j++) {
        stack.pop();
      }
    }
  }
}

if (stack.size() === 0) {
  console.log("FRULA")
} else {
  console.log(stack.items.join(''))
}