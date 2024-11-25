const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const arr = input.map(el => el.trim());
// [ '2', 'superaquatornado', '2', 'abcdefghijklmnopqrstuvwxyz', '5' ]


