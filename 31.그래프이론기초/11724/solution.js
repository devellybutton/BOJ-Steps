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

// n: 정점 수, m: 간선 수
const [N, M] = input[0].split(" ").map(Number);

// 인접리스트 생성하기
const graph = Array.from({ length: N + 1 }, () => []);

// 간선 정보 파싱해서 리스트에 채우기
for (let i = 1; i <= M; i++) {
  const [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

// console.log(graph);

// 연결 요소의 개수
let count = 0;

// 방문배열 초기화
const visited = Array(N + 1).fill(false);

function dfs(vertex) {
  visited[vertex] = true;

  // 인접한 모든 정점에 대해
  // 아직 방문하지 않은 정점이면 방문
  for (const next of graph[vertex]) {
    if (!visited[next]) {
      dfs(next);
    }
  }
}

// 모든 정점에 대해 dfs를 실행하여 연결 요소 구하기
for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    count++;
    dfs(i);
  }
}

console.log(count);
