const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = fs.readFileSync(inputPath).toString().replace(/\r/g, '').trim().split('\n').splice(1);

// left : 왼쪽부터 시작하여 오른쪽으로 이동
// right : 오른쪽부터 시작하여 왼쪽으로 이동

function isPalindrome(str, left, right, count) {
  let N = str.length - 1;
  // 종료조건 : 왼쪽 포인터가 오른쪽 포인터와 같거나 클 때
  // 모든 검사가 끝났으면 팰린드롬이므로 1을 반환
  if (left >= right) return [1, count];

  // 첫 번째 원소와 마지막 원소가 
  // 같은 경우 : 재귀호출 (포인터의 인덱스와 카운트를 바꿔주기)
  // 다른 경우 : 0을 반환
  if (str[left] === str[right]) {
    return isPalindrome(str, left + 1, right - 1, count + 1);
  } else {
    return [0, count];
  }
}

for (str of input) {
  const [result, count] = isPalindrome(str, 0, str.length - 1, 1);
  console.log(result, count);
}

/**
 * 시간 복잡도
 * 
 * - 각 비교연산 : O(1)
 * - 최악의 경우 문자열의 절반까지 호출 => 전체 재귀 호출 횟수는 n/2
 * - 전체 : O(n)
 */