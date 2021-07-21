---
title: TypeCheck
---

## 자바스크립트는 타입언어가 아니다
런타임에 throw 를 던지지 않으면 오류가 전파된다.

런타임밖에 없는 언어의 가장 좋은 전략
- 에러를 감지하는 즉시 throw 를 던져야 디버깅할 수 있다.

## TypeCheck 함수 
```javascript
const type = (target, type) => {
  /*
    string, number, boolean 타입을 비교할 때
  * string, number, boolean 은 객체가 아니기 때문에 타입비교를 할 때 typeof 를 사용해야 하고,
  * typeof 의 결과 타입이 문자열로 반환된다.
  */
  if (typeof type == 'string') {
    if (typeof target != type) 
      throw `invaild type ${target}: ${type}`;

  // 객체 비교할 때
  } else if (!(target instanceof type))   
      throw `invaild type ${target}: ${type}`;

  return target;
};

type(12, 'number');
type('abc', 'string');
type([1, 2, 3], Array);
type(new Set, Set);
type(document.body, HTMLElement);
```

### `===` 이 아닌 `==` 을 사용하는 이유
`===` : 형 일치 검사 + `==` 검사 → 두번 작동을 하기 때문에 느리다

*type* 은 javascript 의 특징을 잘 살린 함수이다. 

### type 함수의 사용
> 함수의 인자를 의식할 때,
- 왼쪽에서 오른쪽으로 스코프가 하나씩 만들어지면서 처리된다. 
- 따라서 2번째 인자는 1번째 인자의 값을 알고 있다.

```javascript
// 첫번째 인자가 Array 가 아니면, 즉시 throw 가 일어난다. 
const test = (arr, _ = type(arr, Array)) => {
  console.log(arr);
};

test([1, 2, 3]);
test(123);

const test2 = (a, b, c, _0 = type(a, 'string'), _1 = type(b, 'number'), _2 = type(c, 'boolean')) => {
  console.log(a, b, c);
};
test2('abc', 123, true);
```
