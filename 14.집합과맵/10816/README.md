### Map에서 get()을 사용하여 가져온 값에 대해 직접 연산자를 적용할 수 없음.
- get()으로 가져온 값은 원시 값으로 반환되므로, <b>그 값을 직접 변경하거나 연산자를 적용할 수 없음.</b>
- 값을 수정하려면 set()을 사용하여 다시 설정해야함.

- arr1 배열을 순차적으로 순회하면서 각 숫자가 몇 번 등장했는지를 countMap 객체에 기록

틀린 코드
```
arr1.forEach(num => {
  if (countMap.has(num)) {
    countMap.get(num)++;
  } else {
    countMap.set(num, 1);
  }
});
```
```
// 불가능
countMap.get(num) = countMap.get(num) + 1  
```

올바른 코드
```
arr1.forEach(num => {
  if (countMap.has(num)) {
    countMap.set(num, countMap.get(num) + 1); 
  } else {
    countMap.set(num, 1);   }
});
```
```
// 가능
let count = countMap.get(num);
countMap.set(num, count + 1);
```