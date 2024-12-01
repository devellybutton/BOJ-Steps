// 11478번. 서로 다른 부분 문자열의 개수
// 접미사 배열과 LCP 배열 활용

const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const S = fs.readFileSync(inputPath).toString().replace(/\r/g, '').trim();

// 접미사 배열 생성
function suffixArray(S) {
  const n = S.length;
  const suffixes = [];

  // 모든 접미사 생성, 시작 인덱스를 배열에 저장하기
  for (let i = 0; i < n; i++) {
    suffixes.push([S.slice(i), i]);
  }

  // 사전순으로 정렬
  // 0번 인덱스가 알파벳이므로 0번 인덱스끼리 비교
  suffixes.sort((a, b) => a[0].localeCompare(b[0]));

  // 접미사의 시작 인덱스 배열 반환
  return suffixes.map(suffix => suffix[1]);
}

/*
[
  [ 'ababc', 0 ],
  [ 'abc', 2 ],
  [ 'babc', 1 ],
  [ 'bc', 3 ],
  [ 'c', 4 ]
]

[ 0, 2, 1, 3, 4 ]
*/

// LCP 배열 생성
// 접미사 배열에서 인접한 두 접미사 간의 가장 긴 공통 접두사의 길이를 저장
// => 중복되는 부분 문자열 개수 효율적 처리 가능함.
function lcpArray(S, sa) {
  const n = S.length; // 문자열의 길이
  const lcp = new Array(n - 1).fill(0); // LCP 배열 초기화
  const rank = new Array(n).fill(0); // 각 접미사 순위 초기화

  // 접미사 배열에서의 순위를 구함
  // rank[sa[i]]는 접미사 sa[i]가 접미사 배열에서 몇 번째 순서
  for (let i = 0; i < n; i++) {
    rank[sa[i]] = i;
  }

  // LCP 배열 계산
  let h = 0; // 공통 접두사 길이
  for (let i = 0; i < n; i++) {
    // rank[i] = 0에는 계산 X
    // 첫 번째 접미사는 비교할 접미사가 없기 때문임.
    if (rank[i] > 0) {
      // j는 i와 비교할 접미사의 시작 위치
      // sa 배열에서 rank[i] - 1 번째 순서에 해당하는 접미사
      let j = sa[rank[i] - 1];

      // 두 접미사의 공통 접두사를 비교하여 가장 긴 공통 접두사의 길이
      while (i + h < n && j + h < n && S[i + h] === S[j + h]) {
        h++;
      }
      
      // 해당 접미사의 LCP 값 저장
      lcp[rank[i] - 1] = h;

      if (h > 0) {
        h--;
      }
    }
   }
   return lcp;
}

// 서로 다른 부분 문자열의 개수를 계산하는 함수
function countDistinctSubstrings(S) {
  const n = S.length;
  const sa = suffixArray(S); // 접미사 배열
  const lcp = lcpArray(S, sa); // LCP 배열

  console.log(lcp)
  
  // 총 부분 문자열의 개수
  const totalSubstrings = n * (n + 1) / 2;

  // LCP 배열을 통해 중복되는 부분 문자열의 길이를 뺀 개수 계산
  const lcpSum = lcp.reduce((acc, val) => acc + val, 0);

  return totalSubstrings - lcpSum;
}

console.log(countDistinctSubstrings(S))