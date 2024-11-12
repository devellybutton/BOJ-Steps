// 24723. 녹색거탑
const fs = require('fs');

const inputPath = './input.txt' || '/dev/stdin';

const input = fs.readFileSync(inputPath).toString().trim();

let N = Number(input);

let result = (2 ** N)

console.log(result)