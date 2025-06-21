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

const cards = [];
for (let i = 1; i <= N; i++) {
  cards.push(i);
}

class Queue {
  constructor(items) {
    this.queue = items || [];
    this.head = 0;
    this.tail = this.queue.length;
  }

  // 후입
  enqueue(item) {
    this.queue[this.tail] = item;
    this.tail++;
    return item;
  }

  // 선출
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.queue[this.head];
    this.head++;
    return item;
  }

  isEmpty() {
    return this.head === this.tail;
  }

  size() {
    return this.tail - this.head;
  }

  getLastItem() {
    return this.queue[this.head];
  }
}

const queue = new Queue([...cards]);

while (queue.size() > 1) {
  queue.dequeue();

  if (!queue.isEmpty()) {
    const item = queue.dequeue();
    queue.enqueue(item);
  }
}

console.log(queue.getLastItem());
