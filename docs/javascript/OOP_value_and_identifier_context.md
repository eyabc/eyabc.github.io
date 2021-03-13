---
title: Value Context vs Identifier Context
---

## Value Context 
변수가 메모리에 저장이 된다.    
메모리에 1번 주소와 2번 주소에 3을 각각 넣는다.   
메모리 주소와 관계 없이 값이 같으면 같다라고 판단한다.    
값은 메모리 주소가 중요치 않다. 

> 값의 정의
> - 프로그래밍 언어에 따라, 기본 설정으로 제공됨
> - [자바스크립트 기본값 primitive](./%EC%9B%90%EC%8B%9C%ED%83%80%EC%9E%85%EA%B3%BC%20%EC%B0%B8%EC%A1%B0%ED%83%80%EC%9E%85.html#%EC%9B%90%EC%8B%9C%ED%83%80%EC%9E%85)
>     - null, undefined, boolean, string, number, symbol

### 특징 
1. 끝 없는 복사본
    - 값을 할당/함수의 인자 → 언제나 복사본을 만든다 
2. (강제적으로) 상태 변화에 안전하다 [:link:](https://github.com/pul8219/TIL/issues/26)
    - 강제적으로 계속 불변하는 값을 만들어내기 때문에 안전해 보인다.
    - 상태관리면에서 안전한 것은 아님. 
    - 3과 1을 더하면 4가 새로 태어나고 3과 1은 그대로 있다
    - 값을 관리하기 위해서 함수형 프로그래밍이 등장. 
3. 연산을 기반으로 로직을 전개
    - 수학적 프로그래밍은 굉장히 복잡한 도메인의 연산을 표현하기 어렵다. 

## Identifier Context 
heap 메모리에 들어가 있는 객체 O 가 있다.     
A 라는 변수도 O 를 가리키고,      
B 라는 변수도 O 를 가리키면,      
A 와 B 는 같다 라고 한다.       
똑같은 메모리에 있는 *주소*를 가리킴

### 특징 [:link:](https://github.com/pul8219/TIL/issues/26)
1. 하나의 원본을 사용하고 객체의 내부 상태가 변한다.
2. 상태 변화를 내부에서 책임짐
    - 외부에서 객체의 상태를 제어하게 되면 상태의 일관성이 깨진다.
    - 난이도가 있다.
3. 메세지를 기반으로 로직을 전개 

```javascript
const a = { a: 3, b: 5 };
const b = { a: 3, b: 5};
console.log(a === b); // false, Identifier Context
console.log(JSON.stringify(a) === JSON.stringify(b)); // true, Value Context
```

## 객체지향은 철저하게 Value Context 를 배제한다. 
반대로 함수형 프로그래밍에서 Identifier 를 쓰면 버그가 나타날 수 있다

객체지향에서 인자로 primitive → 버그 발생        
좀 더 나아가
- Number 가, 어떤 것은 Age 로서, 어떤것은 Money 로써..등 이유를 생각하고 객체로 만들어야 한다. 
- *생성자 인자* 만 오로지 값을 받을 수 있는 메서드이다. 
