// 첫째 줄에 (A+B)%C, 
// 둘째 줄에 ((A%C) + (B%C))%C, 
// 셋째 줄에 (A×B)%C, 
// 넷째 줄에 ((A%C) × (B%C))%C를 출력

const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = fs.readFileSync(inputPath).toString().trim().split(' ');

const arr = input.map(Number);

function print(a, b, c) {
  let first = (a + b) % c
  let second = ((a % c) + (b % c)) % c
  let third = (a * b) % c
  let fourth = ((a % c) * (b % c)) % c
  console.log(first)
  console.log(second)
  console.log(third)
  console.log(fourth)
}

print(arr[0], arr[1], arr[2])