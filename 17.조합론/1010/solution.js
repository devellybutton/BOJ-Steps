const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';
const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const arr = input.slice(1).map(el => el.split(' ').map(Number));

// console.log(arr);
// [ [ 2, 2 ], [ 1, 5 ], [ 13, 29 ] ]

const MAX = 30;
function binomialCoefficient(n, k) {
  if (k > n) return 0;

  let dp = Array(MAX).fill().map(() => Array(MAX).fill(0));

  // Base case: C(n, 0) = 1 
  for (let i = 0; i < MAX; i++) {
    dp[i][0] = 1;  // C(n, 0) = 1
  }

  // DP 테이블을 채우기
  for (let i = 1; i < MAX; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
    }
  }

  return dp[n][k]; 
}

for (let i = 0; i < arr.length; i++) {
  const n = arr[i][0];
  const m = arr[i][1];
  console.log(binomialCoefficient(m, n));
}
