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

const N = Number(input[0]); // 4
const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);
const M = Number(input[3]); // 3
const C = input[4].split(" ").map(Number);

class QueueStack {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  pushFront(item) {
    this.head--;
    this.items[this.head] = item;
  }

  pushBack(item) {
    this.items[this.tail] = item;
    this.tail++;
  }

  popFront() {
    if (this.isEmpty()) return -1;

    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }

  popBack() {
    if (this.isEmpty()) return -1;

    this.tail--;
    const item = this.items[this.tail];
    delete this.items[this.tail];
    return item;
  }

  isEmpty() {
    return this.head === this.tail ? 1 : 0;
  }

  getFront() {
    if (this.isEmpty()) return -1;
    return this.items[this.head];
  }

  getBack() {
    if (this.isEmpty()) return -1;
    return this.items[this.tail - 1];
  }
}

const queueStack = new QueueStack();

// B를 queueStack 인스턴스에 넣기
B.forEach((item) => queueStack.pushBack(item));

// 중요한 점
// 큐(0) : 원래 있던 원소가 빠짐
// 스택(1) : 삽입한 원소가 빠짐 (자료구조 활용 X)
// 자료구조가 N개 만큼 생성되어야 함. => 각각 생성

const structures = [];

for (let i = 0; i < N; i++) {
  if (A[i] === 0) {
    structures[i] = new QueueStack();
    structures[i].pushBack(B[i]);
  } else {
    structures[i] = B[i];
  }
}

// 첫 번째 큐 찾기
let firstQueue = -1;
for (let i = 0; i < N; i++) {
  if (A[i] === 0) {
    firstQueue = i;
    break;
  }
}

// 모든 게 스택이면 C 그대로 출력
if (firstQueue === -1) {
  console.log(C.join(" "));
  return;
}

const results = [];
for (let j = 0; j < M; j++) {
  let current = C[j];

  for (let i = firstQueue; i < N; i++) {
    if (A[i] === 0) {
      // 큐
      structures[i].pushBack(current);
      current = structures[i].popFront();
    } else {
      // 스택
      continue;
    }
  }

  results.push(current);
}

console.log(results.join(" "));
