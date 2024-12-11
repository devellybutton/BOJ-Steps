const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = fs.readFileSync(inputPath).toString().replace(/\r/g, '').trim().split('\n').splice(1);

function isPalindrome(str, count = 1) {
  let N = str.length - 1;
  // 종료조건 : 문자가 1개가 남았을 때
  // 모든 검사가 끝났으면 팰린드롬이므로 1을 반환
  if (str.length <= 1) return [1, count];

  // 첫 번째 원소와 마지막 원소가 같은 경우 : 
  // 1) 배열을 문자열로 변환하여 자르기
  // 2) 자른 배열을 재귀호출 (범위가 줄어듦)
  // 다른 경우 : 0을 반환
  if (str[0] === str[N]) {
    let arr = str.split('').slice(1, N);
    return isPalindrome(arr.join(''), count + 1);
  } else {
    return [0, count];
  }
}

for (str of input) {
  const [result, count] = isPalindrome(str);
  console.log(result, count);
}

/**
 * 시간 복잡도
 * 
 * - split과 slice는 O(n)이 걸림
 * - 최악의 경우 문자열의 절반까지 호출 => 전체 재귀 호출 횟수는 n/2
 * - 전체 : O(n^2)
 */
