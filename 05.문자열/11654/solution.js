// Node.js에서 fs 모듈 사용
const fs = require('fs');

// 표준 입력으로부터 데이터 읽기
fs.readFile(0, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  
  // 입력 데이터 전처리 (줄바꿈 제거 등)
  const input = data.trim();
  
  // 입력된 문자의 ASCII 코드 계산
  const asciiCode = input.charCodeAt(0);
  
  // 결과 출력
  console.log(asciiCode);
});