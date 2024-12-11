const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const [A, B, V] = fs.readFileSync(inputPath).toString().replace(/\r/g, '').trim().split(' ').map(Number);

// 하루에 올라가는 양 = A - B
// 하루에 올라가는 양 x 일수 + A미터(1일) = 전체 높이
// 전체 높이 - A미터 = 하루에 올라가는 양 x 일수
// 일수 = (전체 높이 - A미터) / 하루에 올라가는 양
// 일수 = (V - A) / (A - B) + 1
// 여기서 1을 더해줘야 하는 이유는 A미터를 올라가는 마지막 날은 미끄러지지 않으므로 1일 더해줘야됨.
// (V - A) / (A - B)는 소수점이 나올 수 있으니 올림을 해준다

const days = Math.ceil((V - A) / (A - B))+ 1
console.log(days)

