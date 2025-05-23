const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 입력 처리 및 결과 계산
const results = [];

for (let i = 0; i < input.length - 1; i++) {
  // "0 0"이 입력되면 종료
  if (input[i] === "0 0") {
    break;
  }
  
  const [first, second] = input[i].split(' ').map(Number);
  
  // 첫 번째 숫자가 두 번째 숫자의 약수인 경우
  if (second % first === 0) {
    results.push("factor");
  }
  // 첫 번째 숫자가 두 번째 숫자의 배수인 경우
  else if (first % second === 0) {
    results.push("multiple");
  }
  // 둘 다 아닌 경우
  else {
    results.push("neither");
  }
}

// 결과 출력
console.log(results.join('\n'));