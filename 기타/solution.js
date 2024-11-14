const fs = require('fs');

const inputPath = './input.txt' || '/dev/stdin';

const input = fs.readFileSync(inputPath).toString().trim().split(' ');

let [a, b] = input.map(Number);

// a, b 중 a를 더 큰 숫자로 세팅
if (a < b) {
  // 임시 변수 temp 사용하여 교환
  let temp = a;
  a = b;
  b = temp;
}

// 유클리드 호제법으로 최대공약수 구하기
function gcd(a, b) {
  if (b === 0) return a;
  else return gcd(b, (a % b));
}

const result  = Number('1'.repeat(gcd(a, b)));

console.log(result);