---
title: # callee, caller
---

[:link:](http://blog.naver.com/PostView.nhn?blogId=mrshin2000&logNo=130177264976) (2013)
[:link:](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/arguments/caller)
성능에 좋지 않다.

## [function.]arguments.callee
지정된 function 개체의 본문에 해당하는 실행중인 Function 개체를 반환

- `function` 현재 실행중인 Function 개체의 이름
- `callee` 관련된 함수가 실행될 때만 사용가능한 arguments 개체의 멤버
    - 초기 값: 실행중인 Function 개체
    - 익명 함수의 재귀를 허용
    
```javascript
function factorial(n) {
    if (n <= 0) return 1;
    else
        return n * arguments.callee(n - 1)
}
```

## functionName.caller
현재 함수를 호출한 함수를 가져옴

함수가 실행중인 경우에만 해당 함수에 대해 정의됨

맨 위 수준에서 함수를 호출하면 caller 는 null 을 포함한다.

caller 속성을 문자열 컨텍스트에 사용하면 functionName.toString과 같은 결과가 나온다.

함수의 역컴파일된 텍스트가 표시됨.

```javascript
function whoCalled() {
   if (whoCalled.caller == null)
      console.log('I was called from the global scope.');
   else
      console.log(whoCalled.caller + ' called me!');
}
console.log(whoCalled());
```
