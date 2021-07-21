---

title: Object.assign()

---

**열거**할 수 있는 하나 이상의 **출처 객체로 부터** **대상 객체로 속성을 복사**할 때 사용한다
대상 객체를 반환 한다.

```javascript
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target); // Object { a: 1, b: 4, c: 5 }
console.log(returnedTarget); // Object { a: 1, b: 4, c: 5 }
```

## 구문
```javascript
Object.assign(target, ...sources)
```
* target : 대상객체
* sources: 하나 이상의 출처 객체
* 반환값: 대상 객체


## 설명
동일한 키가 존재할 경우 대상 객체의 속성은 출처 객체의 속성으로 덮어쓰여짐

Object.assign() 메소드는 **열거할 수 있는 출처 객체의 속성만 대상 객체로 복사**합니다.

**출처 객체의 [[Get]], 대상 객체의 [[SET]] 을 사용하여 getter와 setter를 호출**합니다. 
따라서 이는 속성을 단순히 복사하거나 새롭게 정의하는 것이 아니라 **할당하는 것**입니다.


병합 출처가 getter를 포함하는 경우 프로토타입으로 새로운 속성을 병합하는 것이 적절하지 않을 수 있습니다?
.....

## 에러가 발생할 수 있는 상황
* TypeError : 프로퍼티가 쓰기 불가인 경우
* 에러가 발생하기 전에 속성이 추가되었다면 target 객체는 변경 될 수 있습니다? 
* null undefined 출처 값에 대해서는 오류를 던지지 않는다. 

## 예시  
### 객체 클로닝
```javascript
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
```
## 깊은 클로닝에 대한 주의사항
Object.assign() 은 속성의 값을 복사하기 때문에 다른 대안이 필요하다.

**출처 값이 객체에 대한 참조인 경우, 참조 값만을 복사한다.**
```javascript
function test() {
  'use strict';
  let obj1 = { a: 0, b: { c: 0} };
  let obj2 = Object.assign({}, obj1);
  console.log(JSON.stringify(obj2)); // { a:0, b: { c: 0 } }
  
  obj1.a = 1;
  console.log(JSON.stringify(obj1));  // { a: 1, b: { c: 0 }}
  console.log(JSON.stringify(obj2));  // { a: 0, b: { c: 0 }}

  obj2.a = 2;
  console.log(JSON.stringify(obj1));  // { a: 1, b: { c: 0 }}
  console.log(JSON.stringify(obj2));  // { a: 2, b: { c: 0 }}
  
  obj2.b.c = 3; // obj1, obj2 모두에 영향을 줌
  console.log(JSON.stringify(obj1));  // { a: 1, b: { c: 3 }}
  console.log(JSON.stringify(obj2));  // { a: 2, b: { c: 3 }}
  
  // 깊은 클론
  obj1 = { a: 0, b: { c: 0 }};
  let obj3 = JSON.parse(JSON.stringify(obj1));
  obj1.a = 4;
  obj1.b.c = 4;
  console.log(JSON.stringify(obj3)); // { a: 0, b: { c: 0 }}
}
test();
```

## 객체 병합
```javascript
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 } 
console.log(o1);  // { a: 1, b: 2, c: 3 } 대상 객체 자체가 변경됨
```

## 같은 속성을 가진 객체 병합
속성은 파라미터 순서에서 더 뒤에 위치한 동일한 속성을 가진 다른 객체에 의해 덮어쓰인다.
```javascript
const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

const obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a:1, b: 3, c: 3 }
```

## 심볼형 속성 복사 (생략)
```javascript
const o1 = { a: 1 };
const o2 = { [Symbol('foo')]: 2 };
// ...
```

## 프로토타입 체인의 속성과 열거 불가형 속성은 복사 불가 (생략)

## 원시 자료형은 객체로 래핑 (생략)
```javascript
var v1 = 'abc';
var v2 = true;
var v3 = 10;
var v4 = Symbol('foo');

var obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// 원시 자료형은 래핑되지만, null 과 undefined 는 무시됨.
// 스트링 래퍼만 자체 열거형 속성르 가짐을 유의 ? 
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
```

## 예외에 의해 진행중인 복사 작업 중단 (생략)
```javascript
```

## 접근자 복사 (생략)

# 폴리필 (생략)
ES5 에는 심볼이 없기 때문에 다음 폴리필은 심볼 속성을 지원하지 않는다.
// ...

Reference
--


* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
