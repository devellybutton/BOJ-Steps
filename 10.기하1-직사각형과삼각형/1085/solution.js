// 1085번. 직사각형에서 탈출

const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const [x, y, w, h] = fs.readFileSync(inputPath).toString().replace(/\r/g, '').trim().split(' ').map(Number);

// 직사각형의 네 변 중 가장 거리가 짧은 곳을 구한다
// w, h는 1보다 크거나 같음 (모두 1사분면)
// 왼쪽 변 : x = 0  => 왼쪽 변까지 거리 : x
// 오른쪽 변 : x = w  => 오른쪽 변까지 거리 : w - x
// 위쪽 변 : y = h  => 위쪽 변까지 거리 : h - y
// 아래쪽 변 : y = 0  => 아래쪽 변까지 거리 : y

console.log(Math.min(x, w-x, h-y, y))
