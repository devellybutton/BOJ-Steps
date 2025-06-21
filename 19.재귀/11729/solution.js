// node.js로 풀지 마삼. 시간 초과됨.
// 이 코드는 실행이 잘 되지만 백준에서 시간초과됨.

// 1 : start => end
// 2 : start => middle
// 1 : end => middle
// 3 : start => end (완료)
// 1 : middle => start
// 2 : middle => end (완료)
// 1 : start => end (완료)
 
function hanoiTower(n, start, end, middle, moves) {
	// 디스크가 마지막 1개만 남은 경우 바로 이동
	// 한번에 이동 가능하므로 기록해주고 함수 종료
	if (n === 1) {
		moves.push([start, end])
		return;
	}

	// (n - 1) 디스크가 start에서 middle로 이동
	hanoiTower(n - 1, start, middle, end, moves);

	// 가장 큰 디스크는 바로 start에서 end로 이동
	moves.push([start, end])

	// (n - 1) 디스크가 middle 에서 end로 이동
	hanoiTower(n - 1, middle, end, start, moves);

}

function solution() {
  const fs = require('fs');
  const os = require('os');

  const isLinux = os.platform() === 'linux';

  const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

  const N = Number(fs.readFileSync(inputPath).toString().replace(/\r/g, '').trim());

	let moves = [];
	
	hanoiTower(N, 1, 3, 2, moves);
	
	// 전체 이동 횟수 출력
	console.log(moves.length);

	// moves 배열을 순회하며 이동 과정을 출력
	for (let i = 0; i < moves.length; i++) {
		console.log(moves[i][0], moves[i][1]);
	}
}

solution();