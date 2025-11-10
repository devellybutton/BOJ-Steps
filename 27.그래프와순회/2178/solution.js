const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";

const inputPath = isLinux ? "/dev/stdin" : "./input2.txt";

const input = fs
  .readFileSync(inputPath)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n");

// console.log(input)

const [N, M] = input[0].split(" ").map(Number);
const maze = input.slice(1).map(row => row.split('').map(Number))
// console.log(maze)

/**
 * [
  [ 1, 0, 1, 1, 1, 1 ],
  [ 1, 0, 1, 0, 1, 0 ],
  [ 1, 0, 1, 0, 1, 1 ],
  [ 1, 1, 1, 0, 1, 1 ]
]
 */

const visited = Array.from({ length: N }, () => Array(M).fill(false));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs() {
  // x좌표, y좌표, 누적카운트
  const queue = [[0, 0, 1]];
  visited[0][0] = true;
  
  while (queue.length) {
    const [x, y, count] = queue.shift();
    
    // 도착지점 도착하면 결과 반환
    if (x === N - 1 && y === M - 1) return count;

    // 탐색
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

      if (maze[nx][ny] === 0 || visited[nx][ny]) continue;

      visited[nx][ny] = true;
      queue.push([nx, ny, count + 1]);
    }
  }
}

console.log(bfs())