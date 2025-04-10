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

// 정점 N, 간선 M, 시작정점 V
const [N, M, V] = input[0].split(" ").map(Number);

// 인접리스트 생성
const graph = Array.from({ length: N + 1 }, () => []);

// 간선 정보 파싱하여 그래프 생성
for (let i = 1; i <= M; i++) {
  const [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

// 그래프 오름차순 정렬
for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

// visited 배열 생성
const visited1 = Array(N + 1).fill(false);

// 결과값 출력할 배열
const result1 = [];

// dfs 수행
function dfs(cur_v) {
  // 현재 노드를 방문처리
  visited1[cur_v] = true;

  result1.push(cur_v);

  for (const next of graph[cur_v]) {
    if (!visited1[next]) {
      dfs(next);
    }
  }
}

dfs(V);
console.log(result1.join(" "));

// bfs 수행
const visited2 = Array(N + 1).fill(false);
const result2 = [];

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
    if (this.isEmpty()) return null;

    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }

  isEmpty() {
    return this.head === this.tail;
  }
}

function bfs(cur_v) {
  const queue = new Queue();
  queue.enqueue(cur_v);
  visited2[cur_v] = true; // 현재 노드 방문처리
  result2.push(cur_v); // 시작 노드도 결과에 포함

  while (!queue.isEmpty()) {
    const node = queue.dequeue();

    for (const next of graph[node]) {
      if (!visited2[next]) {
        visited2[next] = true;
        result2.push(next);
        queue.enqueue(next);
      }
    }
  }
}

bfs(V);
console.log(result2.join(" "));
