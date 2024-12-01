// 1764번. 듣보잡
// Map을 활용한 풀이

const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';
const inputPath = isLinux ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(inputPath).toString().replace(/\r/g, '').trim().split('\n');

// 듣도 못한 사람의 수 : N, 보도 못한 사람의 수 : M
const [N, M] = input[0].split(' ').map(Number);

// 듣보잡 명단 계산
const neverHeardOf = new Set(input.splice(1, N)); // 1부터 N개
const neverSeenBefore = new Set(input.splice(1, M)); // 1부터 N이 없으므로 인덱스 범위를 재설정해야 됨.

// Map을 사용하여 등장 횟수를 카운트
const countMap = new Map();

// 듣도 못한 사람 집합
neverHeardOf.forEach(person => {
  countMap.set(person, 1);
})

// 보도 못한 사람 집합
neverSeenBefore.forEach(person => {
  if (countMap.has(person)){
    countMap.set(person, 2) // 모두 등장한 사람은 횟수를 2로 해줌.
  }
})

// 두 집합의 교집합을 찾아 사전순으로 정렬
const answer = [...countMap]
  .filter(([person, count]) => count === 2) // 등장 횟수가 2인 사람만 추출
  .map(([person]) => person) // count 제외 사람 이름만 추출하여 새 배열로 반환
  .sort(); // 배열을 정렬

// 정답 출력
console.log(`${answer.length}\n${answer.join('\n')}`);