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

class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = this.queue.length;
  }

  // 정수 X를 큐에 넣는 연산
  push(item) {
    this.queue[this.tail] = item;
    this.tail++;
  }

  // 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력
  // 큐에 들어있는 정수가 없는 경우에는 -1을 출력
  pop() {
    if (this.empty()) {
      return -1;
    } else {
      const item = this.queue[this.head];
      this.head++;
      return item;
    }
  }

  // 큐에 들어있는 정수의 개수를 출력
  size() {
    return this.tail - this.head;
  }

  // 큐가 비어있으면 1, 아니면 0을 출력
  empty() {
    return this.head === this.tail ? 1 : 0;
  }

  // 큐의 가장 앞에 있는 정수를 출력
  front() {
    if (this.empty()) {
      return -1;
    }
    return this.queue[this.head];
  }

  back() {
    if (this.empty()) {
      return -1;
    }
    return this.queue[this.tail - 1];
  }
}

const queue = new Queue();

const result = [];

for (const order of input) {
  if (order.startsWith("push")) {
    const [push, item] = order.split(" ");
    queue.push(Number(item));
  } else if (order === "back") {
    result.push(queue.back());
  } else if (order === "front") {
    result.push(queue.front());
  } else if (order === "pop") {
    result.push(queue.pop());
  } else if (order === "size") {
    result.push(queue.size());
  } else if (order === "empty") {
    result.push(queue.empty());
  }
}

// for (const number of result) {
//   console.log(number);
// }

console.log(result.join("\n"));
