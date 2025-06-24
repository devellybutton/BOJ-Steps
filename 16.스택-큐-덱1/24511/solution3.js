const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";
const inputPath = isLinux ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);
const M = Number(input[3]);
const C = input[4].split(" ").map(Number);

class QueueStack {
  constructor(initialValue) {
    this.items = [];
    this.head = 100000; // 중간에서 시작
    this.tail = 100000;
  }

  pushBack(value) {
    this.items[this.tail++] = value;
  }

  pushFront(value) {
    this.items[--this.head] = value;
  }

  popFront() {
    if (this.isEmpty()) return undefined;
    return this.items[this.head++];
  }

  popBack() {
    if (this.isEmpty()) return undefined;
    return this.items[--this.tail];
  }

  isEmpty() {
    return this.head === this.tail;
  }
}

// 큐만 추려서 자료구조 안에 넣기
const queues = new QueueStack();

for (let i = 0; i < N; i++) {
  if (A[i] === 0) {
    queues.pushBack(B[i]);
  }
}

const results = [];

for (let i = 0; i < M; i++) {
  queues.pushFront(C[i]);
  results.push(queues.popBack());
}

console.log(results.join(" "));
