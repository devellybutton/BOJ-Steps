const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";

const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs
    .readFileSync(inputPath)
    .toString()
    .replace(/\r/g, "")
    .trim()
    .split("\n");

const N = Number(input[0]);
const commands = input.slice(1).map(Number);

class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    compare(a, b) {
        if (Math.abs(a) === Math.abs(b)) return a - b;
        return Math.abs(a) - Math.abs(b);
    }

    push(value) {
        this.heap.push(value);
        this._bubbleUp();
    }

    pop() {
        if (this.size() === 0) return 0;

        const min = this.heap[0];
        const end = this.heap.pop();

        if (this.size() > 0) {
            this.heap[0] = end;
            this._buubleDown();
        }

        return min;
    }

    _bubbleUp() {
        let idx = this.size() - 1;
        const element = this.heap[idx];

        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.heap[parentIdx];

            if (this.compare(element, parent) >= 0) break;

            this.heap[parentIdx] = element;
            this.heap[idx] = parent;

            idx = parentIdx;
        }
    }

    _buubleDown() {
        let idx = 0;
        const length = this.size();
        const element = this.heap[idx];

        while (true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let swap = null;

            // 왼쪽 자식이 존재하고 부모보다 작으면 교환 대상
            if (leftIdx < length) {
                if (this.compare(this.heap[leftIdx], element) < 0) {
                    swap = leftIdx;
                }
            }

            if (rightIdx < length) {
                if (
                    (swap === null && this.compare(this.heap[rightIdx], element) < 0) ||
                    (swap !== null &&
                        this.compare(this.heap[rightIdx], this.heap[leftIdx]) < 0)
                ) {
                    swap = rightIdx;
                }
            }
            // 교환할 대상이 없으면 정렬 완료
            if (swap === null) break;

            // 부모와 자식 교환
            this.heap[idx] = this.heap[swap];
            this.heap[swap] = element;

            // 한 단계 아래로 이동
            idx = swap;
        }
    }
}

const heap = new MinHeap();
let output = [];

for (const x of commands) {
    if (x === 0) {
        output.push(heap.pop());
    } else {
        heap.push(x);
    }
}

console.log(output.join("\n"));