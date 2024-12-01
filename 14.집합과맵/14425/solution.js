// 14425번. 문자열 집합

const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const arr = fs.readFileSync(inputPath).toString().replace(/\r/g, '').trim().split('\n');

const [N, M] = arr[0].split(' ').map(Number);

const wordsInSet = [];
let count = 0;

// 첫 번째 줄을 제외한 N개의 단어를 집합에 추가
for (let i = 1; i <= N; i++) {
  wordsInSet.push(arr[i]);
}

// 배열을 Set으로 변환하여 빠른 검색 가능
const set = new Set(wordsInSet)

// M개의 단어가 집합에 존재하는지 확인하고, 존재하는 경우 count를 증가
for (let i = N + 1; i < arr.length; i++) {
  if (set.has(arr[i])) count++;
}

console.log(count)

/**
 * 시간 복잡도
 * 
 * - 첫 번째 루프 : O(N) 
 * - 두 번째 루프 : O(M)
 * - 전체 : O(N + M) 
 */