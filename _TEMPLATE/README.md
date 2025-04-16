# 자바스크립트 템플릿

- input은 문제에 따라서 조절하기

### 로컬 테스트용

```
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
```

### 백준 제출용

```
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
```

### 둘 다 가능

- 귀찮으니 이걸로 로컬/백준 실행 가능

```
const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(inputPath).toString().replace(/\r/g, '').trim().split('\n');
```
