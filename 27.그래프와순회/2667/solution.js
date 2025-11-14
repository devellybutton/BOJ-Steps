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
const N = Number(input[0]);

// 2차원 배열 생성
const map = input.slice(1).map(row => row.split('').map(Number));

// visited 배열 생성
const visited = Array.from({ length: N }, () => Array(N).fill(false));

// result 배열 생성
const result = [];

// 상하좌우 이동 
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// BFS 함수
function bfs(x, y) {
    const queue = [[x, y]];
    visited[x][y] = true;

    let count = 1;

    while (queue.length > 0) {
        const [cx, cy] = queue.shift();

        for (let dir = 0; dir < 4; dir++) {
            const nx = cx + dx[dir];
            const ny = cy + dy[dir];

            // 범위 벗어나면 무시
            if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;

            // 집이고 방문 안 했으면 추가
            if (map[nx][ny] === 1 && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny]);
                count++;
            }
        }
    }

    return count;
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {

        if (map[i][j] === 1 && !visited[i][j]) {
            const size = bfs(i, j);
            result.push(size);
        }
    }
}

result.sort((a, b) => a - b);

console.log(result.length);
for (const size of result) {
    console.log(size);
}
