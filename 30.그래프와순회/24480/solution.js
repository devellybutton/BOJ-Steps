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

// n: 정점 수, start: 시작하는 정점
const [n, m, start] = input[0].split(" ").map(Number);

// 인접리스트 생성하기
const graph = Array.from({ length: n + 1 }, () => []);

// 간선정보 파싱하여 그래프 생성
// 간선은 1번 인덱스부터 m개의 줄
for (let i = 1; i <= m; i++) {
  const [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

// 각 정점의 인접리스트 정렬 (내림차순)
for (let i = 1; i <= n; i++) {
  graph[i].sort((a, b) => b - a);
}

// 방문할 정점의 순서를 기록할 배열
const order = Array(n + 1).fill(0);
let count = 1;

// dfs 수행
function dfs(cur_v) {
  order[cur_v] = count++;
  for (let v of graph[cur_v]) {
    if (order[v] == 0) {
      dfs(v);
    }
  }
}

dfs(start);

// 결과 출력
let result = "";
for (let i = 1; i <= n; i++) {
  result += order[i] + `\n`;
}

console.log(result.trim());
