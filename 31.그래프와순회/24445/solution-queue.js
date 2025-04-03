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

const [n, m, start] = input[0].split(" ").map(Number);

// 인접 리스트 생성
const graph = Array.from({ length: n + 1 }, () => []);

// 간선 정보로 리스트 채우기
for (let i = 1; i <= m; i++) {
  const [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

// 인접 리스트 정렬 (내림차순)
for (let i = 1; i <= n; i++) {
  graph[i].sort((a, b) => b - a);
}

// 순회 순서 담을 배열
const order = Array(n + 1).fill(0);
let count = 1;

// 큐 클래스 구현
class Queue {
  constructor() {
    this.items = [];
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item) {
    this.items[this.tail] = item;
    this.tail++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }

  isEmpty() {
    return this.head === this.tail;
  }
}

// bfs 실행
function bfs(start) {
  const queue = new Queue();
  queue.enqueue(start);
  order[start] = count++;

  while (!queue.isEmpty()) {
    const node = queue.dequeue();

    for (const next of graph[node]) {
      if (order[next] === 0) {
        order[next] = count++;
        queue.enqueue(next);
      }
    }
  }
}

bfs(start);

let result = "";
for (let i = 1; i <= n; i++) {
  result += order[i] + "\n";
}
console.log(result.trim());
