// 큐 구현
class Queue {
  constructor() {
    this.items = {};
    this.head = [];
    this.tail = [];
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const node = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return node;
  }

  enqueue(item) {
    this.items[this.tail] = item;
    this.tail++;
  }

  isEmpty() {
    return this.head === this.tail;
  }
}

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

// 문제 분석
// 1. 최소의 배추흰지렁이 마리 수 = 연결 요소의 개수
// 2. 인접행렬을 활용하여 풀기
let lineIndex = 0; //
const T = parseInt(input[lineIndex]); // 테스트 케이스 개수
const results = [];

// 테스트 케이스 반복
// 주의) 이 문제에서 테스트 케이스 1개 이상이라 반복문으로 돌려줘야됨
for (let t = 0; t < T; t++) {
  const [M, N, K] = input[lineIndex++].split(" ").map(Number);

  // 배추밭 초기화
  const field = Array.from({ length: N }, () => Array(M).fill(0));

  // 배추 위치 표시
  for (let i = 0; i < K; i++) {
    const [X, Y] = input[lineIndex].split(" ").map(Number);
    field[X][Y] = 1;
  }

  const wormCount = countWorms(field, M, N);
  results.push(wormCount);
}

// 큐 구현
class Queue {
  constructor() {
    this.items = {};
    this.head = [];
    this.tail = [];
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const node = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return node;
  }

  enqueue(item) {
    this.items[this.tail] = item;
    this.tail++;
  }

  isEmpty() {
    return this.head === this.tail;
  }
}

// 지렁이 수 계산 - bfs 시행
function countWorms(field, M, N) {
  // 방문여부 체크용 배열
  const visited = Array(Math.max(M, N) + 1).fill(false);

  // 상하좌우 이동 방향
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  let wormCount = 0;

  // 모든 배추 위치 순회
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (field[y][x] === 1 && !visited[y][x]) {
        warmCount++;

        // BFS로 연결된 모든 배추 방문 처리
        const queue = new Queue();
        queue.enqueue({ x, y });
        visited[y][x] = true;

        while (!queue.isEmpty()) {
          const current = queue.dequeue();
          while (!queue.isEmpty()) {
            const current = queue.dequeue();

            // 상하좌우 네 방향 탐색
            for (let i = 0; i < 4; i++) {
              const nx = current.x + dx[i];
              const ny = current.y + dy[i];

              // 범위 내에 있고, 배추가 있으며, 방문하지 않았다면
              if (
                nx >= 0 &&
                nx < M &&
                ny >= 0 &&
                ny < N &&
                field[ny][nx] === 1 &&
                !visited[ny][nx]
              ) {
                visited[ny][nx] = true;
                queue.enqueue({ x: nx, y: ny });
              }
            }
          }
        }
      }
    }
  }
}
