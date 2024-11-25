const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = fs.readFileSync(inputPath).toString().trim();

const N = BigInt(input);

// function MenOfPassion(n) {
//   // let arr = Array.from({ length: n }, (_, index) => index + 1);
//   // let sum = 0;
//   let count = 0;

//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       for (let k = 1; k <= n; k++) {
//         // sum += (arr[i] * arr[j] * arr[k]);
//         count += 1;
//       }
//     }
//   }

//   return count;
// }

// console.log(MenOfPassion(N))

// // 최고차항의 차수는 3
// console.log(3)

console.log(N, typeof N)

console.log(N * N * N)

console.log(`${N * N * N}`)

// console.log(Math.pow(N, 3))
// console.log(3)