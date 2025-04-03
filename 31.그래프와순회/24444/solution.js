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

// n: 정점 수, m: 간선 수, start: 시작하는 정점
const [n, m, start] = input[0].split(" ").map(Number);

// 인접 리스트 생성하기
const graph = Array.from({ length: n + 1 }, () => []);

// 간선정보 파싱하여 그래프 생성
for (let i = 1; i <= m; i++) {
  const [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

// 각 정점의 인접리스트 정렬 (오름차순)
for (let i = 1; i <= n; i++) {
  graph[i].sort((a, b) => a - b);
}

// 방문 순서 기록할 배열
const order = Array(n + 1).fill(0);
let count = 1;

// bfs 수행
function bfs(start) {
  const queue = [start];
  order[start] = count++;

  while (queue.length > 0) {
    const node = queue.shift();

    for (const next of graph[node]) {
      if (order[next] === 0) {
        order[next] = count++;
        queue.push(next);
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
