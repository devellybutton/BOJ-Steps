const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const [[hour, minute], timeTakenArr] = input.map(line => line.split(' ').map(Number));
const timeTaken = timeTakenArr[0];

function getEndTime(hour, minute, timeTaken) {
  let endHour = hour;
  let endMinute = minute + timeTaken;

  while (endMinute >= 60) {
    endMinute = endMinute - 60
    endHour += 1;
  }

  if (endHour >= 24) {
    endHour = endHour - 24
  }

 return [endHour, endMinute];
}

console.log(...getEndTime(hour, minute, timeTaken))