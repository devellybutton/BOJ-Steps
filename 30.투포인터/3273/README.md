### 반복문 개선

- if-else문을 switch문으로 개선
```
while (left < right) {
  const sum = sortedArr[left] + sortedArr[right];
  
  switch (true) {
    case sum === x:
      count++;
      left++;
      right--;
      break;
    case sum < x:
      left++;
      break;
    case sum > x:
      right--;
      break;
  }
}
```