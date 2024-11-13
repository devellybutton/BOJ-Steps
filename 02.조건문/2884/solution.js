const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = fs.readFileSync(inputPath).toString().trim().split(' ');

const arr = input.map(Number);

function alarmClock(arr) {
  let [hour, minute] = arr;

  if (minute < 45) {
    hour -= 1;
    minute = minute + 60 - 45;
  } else {
    minute = minute - 45;
  }

  if (hour < 0) {
    hour = hour + 24;
  }

  return [hour, minute];
}

const result = alarmClock(arr)
console.log(...result);