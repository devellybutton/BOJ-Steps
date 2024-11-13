// 이 문제는 readline 모듈로 실행하면 권한 에러가 남.

const readline = require('readline');

// readline 인터페이스 설정
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 두 번째 입력을 받기 위해, 첫 번째 입력 후 두 번째 입력을 처리
let x, y;

rl.on('line', (input) => {
  if (x === undefined) { // 첫 째줄
    x = parseInt(input);
  } else {
    y = parseInt(input); // 둘 째줄
    rl.close();
  }
})

// 입력을 받은 후 처리
rl.on('close', () => {
  function quadrant(x, y) {
    if (x > 0 && y > 0) return 1;
    else if (x < 0 && y > 0) return 2;
    else if (x < 0 && y < 0) return 3;
    else if (x > 0 && y < 0) return 4;
  }

  // 결과 출력
  console.log(quadrant(x, y));
});