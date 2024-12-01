// 1269번. 대칭 차집합

const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = fs.readFileSync(inputPath).toString().replace(/\r/g, '').trim().split('\n');

// 집합 A의 원소의 개수 N
// 집합 B의 원소의 개수 B
const [N, M] = Number(input[0].split(' ').map(Number));

const setA = new Set([...input[1].split(' ').map(Number)])
const setB = new Set([...input[2].split(' ').map(Number)])

// 교집합 원소의 개수(중복된 원소의 개수) 구하기
// 각 집합의 원소의 개수에서 중복된 원소의 개수만 제거
let commonCount = 0;

for (let num of setA) {
  if (setB.has(num)) {
    commonCount++;
  }
}

// 대칭 차집합의 원소의 개수 = A와 B의 원소 개수 합 - 공통된 원소 개수 * 2
const answer = setA.size + setB.size - commonCount * 2;

console.log(answer);

/**
 * 시간 복잡도
 * 
 * - 입력 파싱 : O(N)과 O(M)
 * - Set 생성 : O(N)과 O(M)
 * - 교집합 계산 : O(N) (setA를 순회하면서 setB와의 중복여부 확인)
 * - 전체 : O(N + M)
 */