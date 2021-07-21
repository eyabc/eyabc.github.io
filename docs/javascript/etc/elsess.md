``````
## instanceof
비교 연산자, 클래스 혹은 부모클래스의 객체인지 판별

```javascript
let Person = function() { this.name = "jun" } ; // name 은 전역 변수
let jun = new Person();

jun instanceof Person; // true
jun.__proto__.constructor === Person; // true
jun instanceof Object; // true
jun.__proto__.__proto__.constructor === Object; // true
```

## isFinite
매개변수에 전달된 값이 정상적인 유한수인지 검사
- 반환값: Boolean
- 매개변수
    - 숫자가 아닌경우, 숫자로 강제변환
```javascript
console.log(isFinite(Infinity));  // false
console.log(isFinite(NaN));       // false
console.log(isFinite('Hello'));   // false
console.log(isFinite('2005/12/12'));   // false

console.log(isFinite(0));         // true
console.log(isFinite(2e64));      // true
console.log(isFinite('10'));      // true: '10' → 10
console.log(isFinite(null));      // true: null → 0
```
null 이 숫자로 암묵적 강제 형변환이 일어난 경우
```javascript
Number(null)  // 0
```
null 이 불리언로 암묵적 강제 형변환이 일어난 경우
```javascript
Boolean(null) // false
```

## isNaN()
매개변수에 전달된 값이 NaN 인지 검사
- 반환값: Boolean
- 매개변수
    - 숫자가 아닌경우 숫자로 걍제 형변환

```javascript
isNaN(NaN)       // true
isNaN(undefined) // true: undefined → NaN
isNaN({})        // true: {} → NaN
isNaN('blabla')  // true: 'blabla' → NaN

isNaN(true)      // false: true → 1
isNaN(null)      // false: null → 0
isNaN(37)        // false

// strings
isNaN('37')      // false: '37' → 37
isNaN('37.37')   // false: '37.37' → 37.37
isNaN('')        // false: '' → 0
isNaN(' ')       // false: ' ' → 0

// dates
isNaN(new Date())             // false: new Date() → Number
isNaN(new Date().toString())  // true:  String → NaN
```

## parseFloat(string)
- 반환값: 매개변수에 전달된 문자열을 부동소수점 숫자로 변환
    - NaN : 첫문자를 숫자로 변환할 수 없을 때

문자열의 첫 숫자만 반환되며 전 후 공백은 무시된다.

```javascript
parseFloat('3.14');     // 3.14
parseFloat('10.00');    // 10
parseFloat('34 45 66'); // 34
parseFloat(' 60 ');     // 60
parseFloat('40 years'); // 40
parseFloat('He was 40') // NaN
```

## parseInt(string, [radix])
- 반환값: 매개변수에 전달된 문자열을 정수형 숫자(Integer 10진수?)로 해석
    - string 이 radix 진수라면 10진수로는 몇일까?
- 매개변수 radix : 진법을 나타내는 기수 (2 ~ 36, 기본값 10)
- string이 문자열이 아니면 문자열로 강제 형변환
    ```javascript
    parseInt(10);     // 10
    parseInt(10.123); // 10
    ```

- string 이 0x, 0X로 시작하면 16진수로 해석하여 반환
- string 의 문자열의 첫번째 문자가, 해당 지수의 숫자로 변환될 수 없다면 NaN 반환
    ```javascript
    parseInt('A0'); // A는 10진수가 아니다.
    parseInt('20', 2) // '20'의 '2'는 2진수가 아니다.
    ```
- string 문자열의 두번째 문자부터, 만약 해당 진수를 나타내는 숫자가 아니면
해당 문자부터 끝까지 무시하며, 해석된 정수만 반환
    ```javascript
    parseInt('1A0');    // 1
    parseInt('102', 2); // 2
    parseInt('58', 8);   // 5
    parseInt('FG', 16);  // 15
    ```
- 문자열의 첫 숫자만 반환되며 전 후 공백은 무시된다.
    ```javascript
    parseInt('34 45 66'); // 34
    parseInt(' 60 ');     // 60
    parseInt('40 years'); // 40
    parseInt('He was 40') // NaN
    ```

- 10진수 숫자를 해당 기수의 문자열로 변환하여 반환하고 싶을 때는 Number.prototype.toString 메소드를 사용

## encodeURI() decodeURI()
매개변수로 전달된 URI(Uniform Resource Identifier)를 인코딩한다.

### 인코딩
URI의 문자들을 이스케이프 처리하는것.
![uri](/img/GC/uri.png)

### 이스케이프 처리
네트워크를 통해 정보를 공유할 때 어떤 시스템에서도 읽을 수 있는 ASCII Character-set 으로 변환하는 것
- UTF-8 특수문자, 1문자당 1-3byte,
- UTF-8 한글표현, 1문자당 3byte

특수문자 공백(space)은 $20, 한글 '가' %EC%9E%90 으로 인코딩된다.

- 제외 문자: 알파벳, 0~9의 숫자, - _ . ! ~ * ‘ ( )

```javascript
var uri = 'http://example.com?name=이웅모&job=programmer&teacher';
var enc = encodeURI(uri);
var dec = decodeURI(enc);
console.log(enc);
// http://example.com?name=%EC%9D%B4%EC%9B%85%EB%AA%A8&job=programmer&teacher
console.log(dec);
// http://example.com?name=이웅모&job=programmer&teacher
```

### encodeURIComponent() decodeURIComponent()
`encodeURIComponent` 매개변수로 전달된 URI component(구성요소)를 인코딩

인수를 쿼리스트링의 일부라고 간주하여
`=``?``&`를 인코딩 한다.

encodeURI는 `=``?``&` 를 인코딩하지 않는다.

## Object.is() [:link:](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/is)
특이한 동등 비교를 할 때 사용

syntax `Object.is(value1, value2)`

return `두 인수가 같은 값인지 여부를 나타내는 Boolean`

### true 인경우
- 둘 다 undefined
- 둘 다 null
- 둘 다 true 또는 둘 다 false
- 둘 다 같은 문자에 같은 길이인 문자열
- 둘 다 같은 객체
- 둘 다 숫자이며
  - 둘 다 +0
  - 둘 다 -0
  - 둘 다 NaN
  - 둘 다 0이나 NaN이 아니고 같은 값을 지님

### ==, ===, Object.is 비교
== 연산강제
- 형변환을 적용 ("" == false) === true

Object.is
- 강제 형변환 없음

=== 연산
- 강제 형변환 없음
- -0 === +0
- Number.NaN !== NaN TODO

## Map [:link:](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map)
- 키 값 쌍을 저장
- 삽입 순서 기억
- 객체와 원시값을 키와 값으로 사용할 수 있다.

### 설명
삽입 순서대로 요소를 순회
- for (key, value) of myMap

### 키 동일성
NaN와 NaN, -0와 +0 을 일치한다고 간주함.

### Object 와 Map 유사
값에 키를 할당, 그 키로 값을 얻음, 키를 삭제, 키값 존재 확인

### Map 을 선호해야 할 중요한 차이점

|  | Map | Object |
|---|---|---|
| 의도치 않은 키 | 명시적으로 제공된 키만 사용 | Object는 프로토타입을 가지므로 기본 키가 존재할 수 있습니다. 주의하지 않으면 직접 제공한 키와 충돌할 수도 있습니다. |
| 키 자료형 | 함수 객체등을 포함한 모든 값 | String, Symbol |
| 키 순서 | 정렬됨, 삽입순으로 순회 | 정렬안됨. 참고: ECMAScript 201 이후로, 객체도 문자열과 Symbol 키의 생성 순서를 유지합니다. ECMEScript 2015 명세를 준수하는 JavaScript 엔진에서 문자열 키만 가진 객체를 순회하면 삽입 순을 따라갑니다.|
| 크기 | size 속성 | 직접 알아내야됨 |
| 순회 | 순회 가능  | 키를 알아낸후 키의 배열을 순회 |
| 성능 |  잦은 키-값 쌍의 추가 제거에서 더 좋은 성능 | 잦은 키-값 쌍의 추가 제거 최적회가 없다. |

### 생성자
Map()

### 속성
.length
- 값이 0인 속성
- 요소의 수는 Map.prototype.size

Map.prototype.size
- ??

Map.prototype
- Map 생성자의 프로토타입

### Map 인스턴스
모든 Map 인스턴스는 Map.prototype 을 상속한다.

#### 속성
`Map.prototype.constructor`
- 인스턴스의 프로토타입을 만든느 함수. Map 함수의 기본 값

`Map.prototype.size`
- Map 객체에 들어있는 key/value 쌍의 수를 반환.

#### 메서드
`Map.prototype.clear()`
- 모든 key/value pair 제거

`Map.prototype.delete(key)`
- Map.prototype.has(key) 값 반환
- key-value 쌍 제거

`Map.prototype.entries()`
- 모든 요소들의 [key, value] 형태의 array Iterator 객체 반환

`Map.prototype.forEach(callbackFn[, thisArg])`
- key-value pair 순서대로 callbackFn 을 호출
- thisArg 는 callback의 this 값을 제공된다.

`Map.prototype.get(key)`
- key 에 해당하는 값 반환. 없으면 undefined 반환

`Map.prototype.has(key)`
- Boolean 값 반환

`Map.prototype.keys()`
- 모든 key 의 순서 있는 Iterator 객체 반환

`Map.prototype.set(key, value)`
- key 에 value 를 집어넣고 Map 객체 반환

`Map.prototype.values()`
- 모든 value의 순서있는 Iterator 객체 반환

Map.prototype[$iterator]() [:link:](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator)
- 모든 [key, value] 형태의 array 로 순서있는 Iterator 객체 반환

### 예시
```javascript
let myMap = new Map()

let keyString = '문자열'
let keyObj    = {}
let keyFunc   = function() {}

// 값 설정
myMap.set(keyString, "'문자열'과 관련된 값")
myMap.set(keyObj, 'keyObj와 관련된 값')
myMap.set(keyFunc, 'keyFunc와 관련된 값')

myMap.size              // 3

// getting the values
myMap.get(keyString)    // "'문자열'과 관련된 값"
myMap.get(keyObj)       // "keyObj와 관련된 값"
myMap.get(keyFunc)      // "keyFunc와 관련된 값"

myMap.get('문자열')    // "'문자열'과 관련된 값"
                         // keyString === '문자열'이기 때문
myMap.get({})            // undefined, keyObj !== {}
myMap.get(function() {}) // undefined, keyFunc !== function () {}
```
### NaN
```javascript
let myMap = new Map()
myMap.set(NaN, 'not a number')

myMap.get(NaN)
// "not a number"

let otherNaN = Number('foo')
myMap.get(otherNaN)
// "not a number"
```
### 순회
```javascript
let myMap = new Map()
myMap.set(0, 'zero')
myMap.set(1, 'one')

for (let [key, value] of myMap) {
  console.log(key + ' = ' + value)
}

for (let key of myMap.keys()) {
  console.log(key)
}

for (let value of myMap.values()) {
  console.log(value)
}

for (let [key, value] of myMap.entries()) {
  console.log(key + ' = ' + value)
}

myMap.forEach(function(value, key) {
  console.log(key + ' = ' + value)
})
```

### Array 객체와의 관계
```javascript
let kvArray = [['key1', 'value1'], ['key2', 'value2']]

// Use the regular Map constructor to transform a 2D key-value Array into a map
let myMap = new Map(kvArray)

myMap.get('key1') // returns "value1"

// Use Array.from() to transform a map into a 2D key-value Array
console.log(Array.from(myMap)) // Will show you exactly the same Array as kvArray

// A succinct way to do the same, using the spread syntax
console.log([...myMap])

// Or use the keys() or values() iterators, and convert them to an array
console.log(Array.from(myMap.keys())) // ["key1", "key2"]
```

### TODO
- Map ; 명시적으로 제공된 키 ? Object는 프로토타입을 가지므로 기본 키가 존재할 수 있습니다 ? 직접 제공한 키와 충돌 ?

### 느낀점
맨날 object 만 쓰다가 map 의 장점을 알고 map 으로도 알고리즘을 풀어봐야겠다.

map 은 오직 메서드를 이용해서 프로퍼티들을 수정한다.

map 의 메서드들 은 항상 무언가를 반환한다. 왜 그럴까? 반환하는 값을 유용하게 활용할 수 있는걸까?

map 은 array 와의 호환성이 좋다. 서로 변환하기 좋다. obj 의 경우 그렇지 않음?.
map은 iterator 가능한 객체를 반환하는 메서드들이 있기 때문인가?
이런거를 javascript 콜렉션 이라고 한단다

## WeakMap
Syntax `new WeakMap([iterable])`
매개변수
- 배열 또는 요소가 키-값 쌍(2-요소 배열)인 다른 iterable 객체
- null 은 undefined 취급

`key` 오직 Object 형


## Set
## WeakSet

## Object.create() [:link:](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
지정된 프로토타입 객체 및 속성을 갖는 새 객체를 만든다.


## .hasOwnProperty()
해당 프로퍼티가 해당 객체의 직속 여부를 확인하는 메서드

</pre>
