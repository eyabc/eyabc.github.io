JavaScript 함수형 프로그래밍 3단계로 설명하기
--
함수형 프로그래밍의 이점 소개

# 순수함수 pure functions
1. 동일한 입력에 대해 항상 동일한 출력을 반환한다.
2. 부작용이 없다.

* 입력과 출력을 매핑시킬 수 있다.
* 함수를 호출하는 쪽과 그 순수 함수는 인자와 반환값을 통해서만 서로 통신이 가능하다.
* 예측가능하다
* 디버그가 쉬다
* 테스트가 쉽다

* 참조투명성(Referentially transparent) 덕분에 함수 결과를 캐싱하여 반복적으로 사용할 수 있는
메모이제이션(memoization) 최적화 기법이 사용가능하다.
* 모든 함수가 순수할 수는 없다(I/O) 작업, 난수처리, 네트워킹, 데이터베이스 처리)
그럼에도 불구하고 함수가 다룰 수 있는 영역을 너 넓게하고 핵심을 간단히 유지하기 위해 컨셉이 소프트웨어 전반에 적용되야 한다.

* 반환값 없이 부가 효과를 이용하므로 순수함수가 아니다.
    ```javascript
    function  addTaco (array) {
      array.push('taco');
    }
    ``` 
* 인자대신 공유변수를 이용하고 있으므로 순수함수가 아니다.
    ```javascript
    function  addTaco () {
      return [...globalArray, 'taco'];
    }
    ```
* 순수함수이다.
    ```javascript
    function  addTaco (array) {
      return [...array, "taco"];
    }
    ```

# 불변성 Immutability
JavaScript 에서 모든 원시 자료형(boolean, string)은 불변하다.
객체나 배열은 불변하지 않지만 불변처럼 다룰 수 있다.

* 불변한 객체나 배열은 만들어진 후에는 더이상 수정할 수 없다.
* 새로운 변수에 할당해서 수정 가능하다.

* mutable
    ```javascript
    const bands = ['Metallica', 'Queen'];
    bands.push('Mirvana');
    ```

* immutable
    ```javascript
    const someBands = ['Metallica', 'Queen'];
    const bands = [...someBands, 'Nirvana'];
    ```

* 하나의 상태만 가지기 때문에 부련한 객체나 배열은 그 내용을 변경해서 무효화 시킬수가 없고 이로인해 부작용을 막을 수 있다.
* 스레드로부터 안전하고(thread-safe) 하고 오류에 대해 국소적(failure atomic) 이다.
* 불변 객체나 배열은 변경 여부를 알아내기 위해 깊은 비교를 할 필요가 없다. 
참조에 대한 검사만 해도 되기 때문에 효율적으로 상태를 관리하는 상황(React)에서 빠른 변경 감지를 가능하게 해준다.



# 선언적 패턴 Declarative Patterns
* 선언적 프로그래밍은 우리가 이루고자 하는 것을 설명한다.
* 명령형 (imperative) 프로그래밍은 우리가 그것을 이루는 방법을 설명한다.

명령형 프로그래밍은 단계 별 할일을 명시적으로 지시한다.
선언적 프로그래밍은 일련의 선언들로 구성된다.

```javascript
const names = ['Han', 'Chewbacca', 'Luke', 'Leia'];
```
* 명령형 패턴
    ```javascript
    const shortNames = [];
    for (let i = 0; i < names.length; i++) {
      if (names[i].length < 5) {
        shortNames.push(names[i]);
      }
    }
    ```

* 선언적 패턴
    ```javascript
    const shortNames = names.filter(name => name.length < 5);
    ```
  * 세부적인 구현 방법이 아니라 다루는 문제의 도메인에 초점을 맞춘다.
  * 보통 더 간결하고 더 에러가 적은 코드를 생성하며 이해하기 쉽다.
  


Reference
--
* JavaScript 함수형 프로그래밍 3단계로 설명하기 https://blog.ull.im/engineering/2019/04/07/functional-programming-with-javascript-in-3-steps.html