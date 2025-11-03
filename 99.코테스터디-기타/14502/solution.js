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

const [N, M] = input[0].split(" ").map(Number);

const arr = input.slice(1).map((row) => row.split(" ").map(Number));

const empty = [];
const virus = [];

// 2 = 바이러스, 0 = 빈 곳(안전지대) 좌표
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (arr[i][j] === 0) empty.push([i, j]);
    else if (arr[i][j] === 2) virus.push([i, j]);
  }
}

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

// bfs -> 바이러스 확산
// 2가 있는 곳 사방위
function bfs(temp) {
  const queue = virus.map((v) => [...v]);

  while (queue.length) {
    const [x, y] = queue.shift();

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && nx < N && ny >= 0 && ny < M && temp[nx][ny] === 0) {
        temp[nx][ny] = 2;
        queue.push([nx, ny]);
      }
    }
  }
}

// 안전지대(0) 개수 세기
function getNoVirusArea(temp) {
  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (temp[i][j] === 0) count++;
    }
  }
  return count;
}

let maxSafe = 0;

// 벽 3개 조합 만들기
// 순서 상관없음
function combination(arr, k) {
  if (k === 0) return [[]];
  if (arr.length === 0) return [];

  const [first, ...rest] = arr;

  // 첫 번째 원소를 포함하는 경우
  const withFirst = combination(rest, k - 1).map((comb) => [first, ...comb]);

  // 첫 번째 원소를 포함하지 않은 경우
  const withoutFirst = combination(rest, k);

  // 두 경우를 합쳐서 반환
  return withFirst.concat(withoutFirst);
}

// 최대값 찾기
// 지도를 계속 복사하면서 조합을 돌리고
// 조합 중에서 0의 개수가 최대가 되는 걸 찾기
for (const walls of combination(empty, 3)) {
  // 원래 지도 복사
  const temp = arr.map((row) => [...row]);

  // 주의 원본은 arr이고, 복사본은 temp
  // temp는 계속 갱신됨.
  // 벽 세우기
  for (const [x, y] of walls) {
    temp[x][y] = 1;
  }

  // 바이러스 확산시키기
  bfs(temp);

  // 안전영역 구하기
  const safe = getNoVirusArea(temp);

  // 최대값 갱신
  if (safe > maxSafe) maxSafe = safe;
}

console.log(maxSafe);
