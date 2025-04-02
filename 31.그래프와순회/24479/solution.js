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

// console.log(input)

// 첫 번째줄
const [n, m, start] = input[0].split(" ").map(Number);
// n: 정점 개수, m: 간선 개수, start: 시작 정점

// 인접 리스트로 그래프 표현
const graph = Array.from({ length: n + 1 }, () => []);

// 간선 정보 파싱하여 그래프 구성
for (let i = 1; i <= m; i++) {
  const [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

/**
cur_v는 현재 처리 중인 정점 번호
graph[cur_v]는 현재 정점에 인접한 정점들의 리스트
v는 인접한 정점 중 하나
 */
// 각 정점의 인접 리스트 정렬
for (let i = 1; i <= n; i++) {
  graph[i].sort((a, b) => a - b);
}
// console.log("그래프 구조:", graph);
// console.log("시작 정점:", start);

// // 방문한 정점
// const visited = Array(n + 1).fill(false);

// 방문한 정점의 순서를 기록할 배열
const order = Array(n + 1).fill(0);
let count = 1;

// dfs 함수
function dfs(cur_v) {
  order[cur_v] = count++;
  // console.log("방문한 정점: ", cur_v);

  for (let v of graph[cur_v]) {
    if (order[v] === 0) {
      // 아직 방문 안 했으면
      dfs(v);
    }
  }
}

// DFS 수행
dfs(start);

// 결과 출력
let result = "";
for (let i = 1; i <= n; i++) {
  result += order[i] + `\n`;
}

console.log(result.trim());
