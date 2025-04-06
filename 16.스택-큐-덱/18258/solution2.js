const fs = require("fs");
const os = require("os");

// 파일 입력 처리
const inputPath = os.platform() === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

class Queue {
  constructor() {
    this.items = [];
    this.frontIndex = 0;
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.isEmpty()) return -1;
    const item = this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }

  size() {
    return this.items.length - this.frontIndex;
  }

  isEmpty() {
    return this.size() === 0;
  }

  empty() {
    return this.isEmpty() ? 1 : 0;
  }

  front() {
    return this.isEmpty() ? -1 : this.items[this.frontIndex];
  }

  back() {
    return this.isEmpty() ? -1 : this.items[this.items.length - 1];
  }
}

// 명령 처리 함수
function processCommands(commands) {
  const N = parseInt(commands[0]);
  const commandList = commands.slice(1);

  const queue = new Queue();
  const result = [];

  const commandActions = {
    push: (value) => queue.push(Number(value)),
    pop: () => result.push(queue.pop()),
    size: () => result.push(queue.size()),
    empty: () => result.push(queue.empty()),
    front: () => result.push(queue.front()),
    back: () => result.push(queue.back()),
  };

  for (const command of commandList) {
    if (command.includes("push")) {
      const [_, value] = command.split(" ");
      commandActions.push(parseInt(value));
    } else {
      commandActions[command.trim()]();
    }
  }

  return result.join("\n");
}

console.log(processCommands(input));
