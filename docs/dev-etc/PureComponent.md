순수함수
--
* 함수형 프로그래밍의 뿌리, 함수의 부수효과를 없앤다

# 함수형 프로그래밍
* 부수효과를 없애고 순수함수를 만들어 모듈화 수준을 높이는 프로그래밍 패러다임
## 부수효과
* 외부의 상태를 변경하는 것
* 함수로 들어온 인자의 상태를 직접 변경하는 것.
## 순수함수
* 부수효과가 없는 함수
* 어떤 함수에 동일한 인자를 주었을 때 항상 같은 값을 리턴하는 함수
* 외부의 상태를 변경하지 않는 함수

## 순수함수의 예
```javascript
function add(a, b) {
  return a + b;
}
```
* 객체를 참조하는 방식
```javascript
var obj = { val: 10 };
function add(obj, b) {
    return { val: obj.val + b};
}
```

## 순수함수가 아닌 예
* 외부상태 c에 따라 리턴값이 달라짐
    ```javascript
    var c = 10;
    function add(a, b) {
        return a + b + c;
    }
    c = 20;
    ```
    * c가 상수라면 순수함수다.

* 함수가 외부의 값을 변경하는 코드
    ```javascript
    var c = 20;
    function add(a, b) {
        c = b;
        return a + b;
    }
    ```
* 객체를 인자로 받아서 객체의 상태값을 변경하는 코드
    ```javascript
    var obj = { val: 10};
    function add(obj, b) {
        obj.val = 20;
    }
    ```











Reference
--
* 기본기를 쌓는 정아마추어 코딩블로그 https://jeong-pro.tistory.com/23