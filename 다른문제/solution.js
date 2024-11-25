// 2와 5의 개수를 세는 함수
function countFactor(x, factor) {
  let count = 0;
  while (x % factor === 0) {
      x /= factor;
      count++;
  }
  return count;
}

// 주어진 배열을 기반으로 DP를 계산하는 함수
function solve(N, grid) {
  // dp 배열 초기화: dp[i][j][0]은 2의 개수, dp[i][j][1]은 5의 개수
  let dp = Array.from({ length: N }, () => Array.from({ length: N }, () => [Infinity, Infinity]));

  // (0, 0)에서 출발하는 경우의 초기값 설정
  dp[0][0][0] = countFactor(grid[0][0], 2);
  dp[0][0][1] = countFactor(grid[0][0], 5);

  // 첫 번째 행과 첫 번째 열을 채우기
  for (let i = 1; i < N; i++) {
      if (grid[i][0] !== 0) {
          dp[i][0][0] = dp[i - 1][0][0] + countFactor(grid[i][0], 2);
          dp[i][0][1] = dp[i - 1][0][1] + countFactor(grid[i][0], 5);
      }
      if (grid[0][i] !== 0) {
          dp[0][i][0] = dp[0][i - 1][0] + countFactor(grid[0][i], 2);
          dp[0][i][1] = dp[0][i - 1][1] + countFactor(grid[0][i], 5);
      }
  }

  // 나머지 칸들을 채우기
  for (let i = 1; i < N; i++) {
      for (let j = 1; j < N; j++) {
          if (grid[i][j] !== 0) {
              // 위에서 내려오는 경우
              let up2 = dp[i - 1][j][0] + countFactor(grid[i][j], 2);
              let up5 = dp[i - 1][j][1] + countFactor(grid[i][j], 5);
              dp[i][j][0] = Math.min(dp[i][j][0], up2);
              dp[i][j][1] = Math.min(dp[i][j][1], up5);

              // 왼쪽에서 오는 경우
              let left2 = dp[i][j - 1][0] + countFactor(grid[i][j], 2);
              let left5 = dp[i][j - 1][1] + countFactor(grid[i][j], 5);
              dp[i][j][0] = Math.min(dp[i][j][0], left2);
              dp[i][j][1] = Math.min(dp[i][j][1], left5);
          }
      }
  }

  // (N-1, N-1)에서 끝자리 0의 개수 최소값 구하기
  return Math.min(dp[N - 1][N - 1][0], dp[N - 1][N - 1][1]);
}

// 입력 받기
const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 첫 번째 줄에서 N을 추출
const N = parseInt(input[0]);

// grid 배열에 값 할당
const grid = [];
for (let i = 1; i <= N; i++) {
  grid.push(input[i].split(' ').map(Number));
}

// 결과 출력
console.log(solve(N, grid));