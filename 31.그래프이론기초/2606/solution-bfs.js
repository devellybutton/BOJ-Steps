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

const N = parseInt(input[0]); // 컴퓨터의 수 (정점)
const M = parseInt(input[1]); // 컴퓨터 쌍의 수 (간선)

// 1번 정점과 연결되어 있는 정점의 수 구하기
// 그래프
// 주의) 간선이 M개가 있으므로
// i는 2부터 M + 1까지여야 함.
// (m + 1) - 2 + 1
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 2; i <= M + 1; i++) {
  const [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

let count = 0;
const visited = Array(N + 1).fill(false);

// 큐 구현
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
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }

  isEmpty() {
    return this.head === this.tail;
  }
}

// bfs 진행
function bfs(start) {
  const queue = new Queue();
  queue.enqueue(start);
  visited[start] = true;
  count++;

  while (!queue.isEmpty()) {
    const node = queue.dequeue();

    for (const next of graph[node]) {
      if (!visited[next]) {
        visited[next] = true;
        count++;
        queue.enqueue(next);
      }
    }
  }
}

bfs(1);
// 시작 노드의 개수 1은 빼야됨
console.log(count - 1);
