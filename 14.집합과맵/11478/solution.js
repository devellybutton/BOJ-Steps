// 11478번. 서로 다른 부분 문자열의 개수

const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const S = fs.readFileSync(inputPath).toString().replace(/\r/g, '').trim();

const substrHash = new Set();

// i부터 S.length-1까지 반복 (부분 문자열의 시작 지점)
for (let i = 0; i < S.length; i++) {
  // j는 i부터 S.length-1까지 반복 (부분 문자열의 끝 지점)
  for (let j = i; j < S.length; j++) {
    // i부터 j까지 부분 문자열을 직접 구한다
    // 중복되는 문자열이 있을 수 있어서 자료구조 Set을 활용하여 중복 제거
    let substring = S.substring(i, j + 1);
    substrHash.add(substring);
  }
}

console.log(substrHash.size);

/**
 * 시간 복잡도
 * 
 * - 외부 루프 : n번 반복
 * - 내부 루프 : (n - i)번 반복
 * - 내부 루프에서 substring : 부분 문자열의 길이 O(j - i + 1), 최대 O(n) (지정된 인덱스를 순차적으로 탐색)
 * - 전체 : O(n^3)
 */