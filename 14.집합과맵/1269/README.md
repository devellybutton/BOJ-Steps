변수 선언 및 할당 후 for 반복문으로 commonCount 구하기
```
let commonCount = 0;

for (let num of setA) {
  if (setB.has(num)) {
    commonCount++;
  }
}
``

filter()와 has()를 사용하여 간결하게 변경
```
const commonCount = [...setA].filter(num => setB.has(num)).length;
```