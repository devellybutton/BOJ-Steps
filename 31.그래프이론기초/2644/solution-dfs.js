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

const n = parseInt(input[0]); // 전체 사람의 수 n
const [start, end] = input[1].split(" ").map(Number); // 시작노드, 끝노드
const m = parseInt(input[2]); // 간선의 수 m

const graph = Array.from({ length: n + 1 }, () => []);

// 그래프 구성
for (let i = 3; i < m + 3; i++) {
  const [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

// 방문 여부와 거리를 함께 저장
const visited = Array(n + 1).fill(-1);

// dfs 함수
function dfs(node, distance) {
  visited[node] = distance;

  for (const next of graph[node]) {
    if (visited[next] === -1) {
      dfs(next, distance + 1);
    }
  }
}

dfs(start, 0);

console.log(visited[end]);
