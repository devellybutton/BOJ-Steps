const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';
const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 물건의 개수: N, 배낭의 용량: K
const [N, K] = input[0].split(' ').map(Number);

// 물건의 무게와 가치
// [ [ 6, 13 ], [ 4, 8 ], [ 3, 6 ], [ 5, 12 ] ]
const arr = input.slice(1).map(el => el.split(' ').map(Number));

console.log(arr)

// dp 배열 : 배낭의 용량 K(최대)에 따라 가질 수 있는 최대 가치
// 각 배낭 용량에 대해 최적의 가치를 저장
const dp = new Array(K + 1).fill(0);

for (let i = 0; i < N; i++) {
  const [weight, value] = arr[i];

  // 뒤에서부터 처리해야 중복 계산 방지
  for (let j = K; j >= weight; j--) {
    // 물건을 배낭에 넣지 않는 경우 : 이전에 계산된 그대로의 가치
    // 물건을 배낭에 넣는 경우 : 남은 배낭 용량 j - weight에 현재 물건의 가치를 더함.
    dp[j] = Math.max(dp[j], dp[j - weight] + value);
  }
}

console.log(dp[K]);