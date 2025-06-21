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

const n = parseInt(input[0]); //  전체 사람의 수 n
const [start, end] = input[1].split(" ").map(Number); // 시작노드, 끝노드
const m = parseInt(input[2]); // 간선의 수 m

const graph = Array.from({ length: n + 1 }, () => []);

// 주의 간선의 개수는 m임. m개만큼 그래프 반복문
for (let i = 3; i < m + 3; i++) {
  const [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

// 방문 여부와 거리를 함께 저장
const visited = Array(n + 1).fill(-1);

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
    const node = this.items[this.head];
    this.head++;
    return node;
  }

  isEmpty() {
    return this.head === this.tail;
  }
}

let count = 0;

function bfs(start) {
  const queue = new Queue();
  queue.enqueue(start);
  visited[start] = 0; // 시작점과 시작점의 거리는 0

  while (!queue.isEmpty()) {
    const node = queue.dequeue();

    for (const next of graph[node]) {
      if (visited[next] === -1) {
        visited[next] = visited[node] + 1;
        queue.enqueue(next);
      }
    }
  }
}

bfs(start);

// start에서 end까지의 촌수(거리) 출력
// 어차피 visited[start]는 시작점~시작점의 거리이므로 0임
// visited[end]가 -1이면 연결되지 않은 것임
console.log(visited[end])