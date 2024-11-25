// 2563번 - 색종이

const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 입력된 좌표를 숫자로 변환하여 배열로 저장
const arr = input.map(el => el.split(' ').map(Number))
// [ [ 3 ], [ 3, 7 ], [ 15, 7 ], [ 5, 2 ] ]

// 첫 번째 줄은 색종이의 수이므로 제외하고 좌표만 저장
const _arr = arr.slice(1)

// 도화지 크기는 100x100이므로 100x100 크기의 2차원 배열 생성 
// 모든 원소는 0이고, 1x1의 면적으로 색칠될 경우 1을 추가해줌
function create2DArray(rows, cols) {
  return Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0));
}
const drawPaper = create2DArray(100, 100);

// 색칠된 영역의 넓이 구하기
let squareArea = 0;

// 각 색종이가 도화지에 겹치지 않도록 색칠
// 색칠한 부분에 해당하는 좌표를 이차원배열에 1로 삽입
// 겹친 면적은 어차피 1이 한번만 표시되기 때문에 상관없음
for (coordinate of _arr) {
  let [x, y] = coordinate;
  
  // 각 색종이는 10x10 크기이므로, x, y 좌표에서 시작하여 10x10 범위에 대해 색칠
  for (let i = x; i < x + 10; i++) {
    for (let j = y; j < y + 10; j++) {
       // 이미 색칠된 부분은 다시 색칠할 필요 없으므로 지나감
      if (drawPaper[i][j] === 1) continue;
      // 아닌 경우 1을 표시해주기
      else {
        drawPaper[i][j] = 1;
        squareArea++;
      }
    }
  }
}

// 색칠된 영역의 넓이 구하기
// 2차원 배열에 있는 1의 개수를 세기
console.log(squareArea);

/**
 * 전체 코드 시간 복잡도
 * - 배열 생성 : O(10,000)
 * - 색종이 영역 색칠 : O(100 * 10 * 10)
 * - 결과 출력 : O(1)
 * -> O(N) (색종이의 수 N이 최대일 때 100)
 */