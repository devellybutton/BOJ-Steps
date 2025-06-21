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

const N = parseInt(input[0]);
const papers = input[1].split(" ").map(Number);

class Deque {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  pushFront(item) {
    this.items[this.head - 1] = item;
    this.head--;
  }

  pushBack(item) {
    this.items[this.tail] = item;
    this.tail++;
  }

  popFront() {
    if (this.isEmpty()) return null;

    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }

  popBack() {
    if (this.isEmpty()) return null;

    const item = this.items[this.tail - 1];
    delete this.items[this.tail - 1];
    this.tail--;
    return item;
  }

  size() {
    return this.tail - this.head;
  }

  isEmpty() {
    return this.head === this.tail;
  }
}

// 풍선과 종이값 초기화
const deque = new Deque();
for (let i = 0; i < N; i++) {
  deque.pushBack({
    number: i + 1, // 번호 (N번째)
    value: papers[i], // 종이값
  });
}

const result = []; // 출력값
// 첫 번째 풍선 터뜨리기
let current = deque.popFront();
result.push(current.number);

// 이후 풍선 처리
while (!deque.isEmpty()) {
  let move = current.value; // 현재 터진 풍선의 값

  if (move > 0) {
    move = move - 1; // 양수일 때는 1을 빼줍니다
    for (let i = 0; i < move; i++) {
      deque.pushBack(deque.popFront());
    }
  } else if (move < 0) {
    for (let i = 0; i < Math.abs(move); i++) {
      deque.pushFront(deque.popBack());
    }
  }

  current = deque.popFront(); // 다음 풍선 터뜨리기
  result.push(current.number);
}

console.log(result.join(" "));
