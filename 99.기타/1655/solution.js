const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";

const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs
    .readFileSync(inputPath)
    .toString()
    .replace(/\r/g, "")
    .trim()
    .split("\n")
    .map(Number);

class minHeap {
    constructor() { this.h = []; }

    push(x) {
        this.h.push(x);
        let i = this.h.length - 1;
        while (i > 0 && this.h[i] < this.h[(i - 1) >> 1]) {
            [this.h[i], this.h[(i - 1) >> 1]] = [this.h[(i - 1) >> 1], this.h[i]];
            i = (i - 1) >> 1;
        }
    }

    pop() {
        const top = this.h[0];
        this.h[0] = this.h.pop();
        let i = 0;

        while (true) {
            let l = i * 2 + 1; // 왼쪽 자식
            let r = i * 2 + 2; // 오른쪽 자식
            let s = i; // 가장 작은 값의 위치 


            // 왼쪽/오른쪽 자식 중 더 작은 값을 찾음
            if (l < this.h.length && this.h[l] < this.h[s]) s = l;
            if (r < this.h.length && this.h[r] < this.h[s]) s = r;

            // 더 이상 내려갛 필요 없으면 stop
            if (s === i) break;

            // 가장 작은 자식과 교체
            [this.h[i], this.h[s]] = [this.h[s], this.h[i]]
            i = s;
        }

        return top;

    }

    top() { return this.h[0] }

    size() { return this.h.length }
}

class maxHeap {
    constructor() { this.h = [] }

    push(x) {
        this.h.push(x);
        let i = this.h.length - 1;

        while (i > 0 && this.h[i] > this.h[(i - 1) >> 1]) {
            [this.h[i], this.h[(i - 1) >> 1]] = [this.h[(i - 1) >> 1], this.h[i]];
            i = (i - 1) >> 1;
        }
    }

    pop() {
        const top = this.h[0];
        this.h[0] = this.h.pop();
        let i = 0;

        while (true) {
            let l = i * 2 + 1;
            let r = i * 2 + 2;
            let s = i;

            // 자식 중 더 큰 걸 찾음
            if (l < this.h.length && this.h[l] > this.h[s]) s = l;
            if (r < this.h.length && this.h[r] > this.h[s]) s = r;

            if (s === i) break;

            [this.h[i], this.h[s]] = [this.h[s], this.h[i]];
            i = s;
        }

        return top;
    }

    top() { return this.h[0] }
    size() { return this.h.length }
}

const N = input[0];
const maxH = new maxHeap();
const minH = new minHeap();

let result = [];

for (let i = 1; i <= N; i++) {
    const x = input[i];

    if (maxH.size() === 0 || x < maxH.top()) maxH.push(x);
    else minH.push(x);

    if (maxH.size() > minH.size() + 1) {
        minH.push(maxH.pop())
    } else if (minH.size() > maxH.size()) {
        maxH.push(minH.pop())
    }

    result.push(maxH.top());
}

console.log(result.join('\n'))