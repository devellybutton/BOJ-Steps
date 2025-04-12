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

class Deque {
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

  size() {
    return this.tail - this.head;
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

const deque = new Deque();

const N = parseInt(input[0]);
let results = [];

for (let i = 1; i <= N; i++) {
  const command = input[i];

  if (command.startsWith("1")) {
    const [_, item] = input[i].split(" ").map(Number);
    deque.pushFront(item);
  } else if (command.startsWith("2")) {
    const [_, item] = input[i].split(" ").map(Number);
    deque.pushBack(item);
  } else if (command === "3") {
    results.push(deque.popFront());
  } else if (command === "4") {
    results.push(deque.popBack());
  } else if (command === "5") {
    results.push(deque.size());
  } else if (command === "6") {
    results.push(deque.isEmpty());
  } else if (command === "7") {
    results.push(deque.getFront());
  } else {
    results.push(deque.getBack());
  }
}

console.log(results.join("\n"));
