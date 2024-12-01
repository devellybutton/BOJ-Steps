// 1764번. 듣보잡
// Set을 활용한 풀이

const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = fs.readFileSync(inputPath).toString().replace(/\r/g, '').trim().split('\n');

// 듣도 못한 사람의 수 : N,
// 보도 못한 사람의 수 : M
const [N, M] = input[0].split(' ').map(Number);

// Set을 만들어서 중복없이 명단으로 만들어줌.
const neverHeardOf = new Set(input.slice(1, N + 1));
const neverSeenBefore = new Set(input.slice(N + 1, N + 1 + M));

// 듣보잡 명단
const answer = [];

// 둘 다 있는 경우 출력
for (person of neverHeardOf) {
  if (neverSeenBefore.has(person)) {
    answer.push(person);
  }
}

// 듣보잡 명단을 사전순 정렬
answer.sort();

// 정답 출력
console.log(answer.length);
console.log(answer.join('\n'))

/**
 * 시간 복잡도
 * 
 * - 입력 파싱 : O(N)과 O(M)
 * - Set 생성 : O(N)과 O(M)
 * - 교집합 찾기 : O(N) (has는 O(1), 전체 순회)
 * - 사전순 정렬 : O(K log K) (K는 교집합의 크기)
 * - 전체 : O(N + M + K log K) (K가 최대일 경우, Min(N, M))
 */