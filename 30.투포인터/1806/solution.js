// 구간합을 구하면 O(n^2)으로 시간초과됨

// 누적합 배열 구하기
function cumulative_sum(inputArr) {
  const result = [];
  let sum = 0;

  for (let num of inputArr) {
    sum += num;
    result.push(sum);
  }

  return result;
}

// 입력 받아서 문제 풀이
function solution() {
  const fs = require('fs');
  const os = require('os');
  
  const isLinux = os.platform() === 'linux';
  
  const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 
  
  const input = fs.readFileSync(inputPath).toString().replace(/\r/g, '').trim().split('\n');
  
  const [N, S] = input[0].split(' ').map(Number);
  
  const arr = input[1].split(' ').map(Number);

  const cumulativeResult = cumulative_sum(arr);

  let minCount = Infinity;
  let maxSubSum = -Infinity;

  for (let i = 0; i < cumulativeResult.length; i++) {
    for (let j = 0; j < cumulativeResult.length; j++) {
      // 만약 i와 j가 같은 경우
      if (i === j) continue;

      // 현재 구간의 합
      subSum = cumulativeResult[j] - cumulativeResult[i - 1];

      if (subSum < S) continue; 

      // 현재 구간의 원소의 개수
      // 인덱스 1부터 3까지면 (3 - 1 + 1)개
      let count = j - i + 1;

      // minCount와 현재 구간의 원소의 개수 중 더 작은 것을 minCount로 설정
      minCount = Math.min(minCount, count);
      maxSubSum = Math.max(maxSubSum, subSum);
    }
  }

  if (maxSubSum < S) minCount = 0;
  console.log(minCount);
}

solution();