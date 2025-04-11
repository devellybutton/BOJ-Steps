const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";

const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(inputPath).toString().replace(/\r/g, "").trim();

const [N, K] = input.split(" ").map(Number);

const arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(i);
}

// K번째 사람 제거
// 큐가 빌때까지 반복

class Queue {
  constructor() {
    this.items = [];
    this.head = 0;
    this.tail = 0;
  }

  dequeue() {
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }

  enqueue(item) {
    this.items[this.tail] = item;
    this.tail++;
  }

  isEmpty() {
    return this.head === this.tail;
  }
}

const queue = new Queue();
for (const item of arr) {
  queue.enqueue(item);
}

const result = [];
let count = 1;
while (!queue.isEmpty()) {
  const node = queue.dequeue();
  if (count % K === 0) {
    result.push(node);
  } else {
    queue.enqueue(node);
  }
  count++;
}

// 출력 형식 맞춰줘야 함
// <3, 6, 2, 7, 5, 1, 4>
// "<", : 콤마로 구분하면 뒤에 공백이 생김
console.log("<" + result.join(", ") + ">");
