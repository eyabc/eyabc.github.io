# 이왕이면 제네릭 타입으로 만들라
*JDK 가 제공하는 제네릭타입/메서드*를 사용하는일은 일반적으로 쉽다.

제네릭타입을 새로 만드는 일은 조금어렵지만 *값어치는 충분하다*

새로운 타입을 설계할 때는 *형변환 없이도 사용할 수 있도록 하라.*
- 클라이언트에서 직접 형변환해야 하는 타입보다, *제네릭타입이 더 안전하고 쓰기 편하다.*

기존 타입 중 제네릭이었어야 하는 것이 있다면 제네릭타입으로 변경하자.     
기존 클라이언트에는 아무 영향을 주지 않으면서, 새로운 사용자를 훨씬 편하게 해주는 길이다.

## Object 기반 스택을 제네릭으로 변환

클라이언트는 스택에서 *꺼낸 객체를 형변환* 할 때 **런타임 오류**가 날 위험이 있다.
```java{2,7,15,18}
public class Stack {
    private Object[] elements;
    private int size = 0;
    private static final int DEFAULT_INITIAL_CAPACITY = 16;
    
    public Stack() {
        elements = new Object[DEFAULT_INITIAL_CAPACITY];
    }

    public void push(Object e) {
        ensureCapacity();
        elements[size++] = e;
    }

    public Object pop() {
        if (size == 0)
            throw new EmptyStackException();
        Object result = elements[--size];
        elements[size] = null;
        return result;
    }

    // ...    
}
```

1. 클래스 선언에 *타입 매개변수*`E`를 추가한다.[68]
2. Object 를 적절한 *타입 매개변수* 로 바꾸고 컴파일 한다.

```java{1,2,7,10,15,18}
public class Stack<E> {
    private E[] elements;
    private int size = 0;
    private static final int DEFAULT_INITIAL_CAPACITY = 16;
    
    public Stack() {
        elements = new E[DEFAULT_INITIAL_CAPACITY]; // 오류 발생
    }

    public void push(E e) {
        ensureCapacity();
        elements[size++] = e;
    }

    public E pop() {
        if (size == 0)
            throw new EmptyStackException();
        E result = elements[--size];
        elements[size] = null;
        return result;
    }

    // ...    
}
```
7 번째 줄에서 오류 발생 
- E 와 같은 실체화 불가 타입 → 배열을 만들 수 없다.

> [28]배열보다는 리스트를 우선하라 와는 모순돼 보인다.
> - 사실 제네릭 타입안에서 리스트를 사용하는게 항상 가능하지도, 꼭 더 좋은 것도 아니다.
> - 자바가 리스트를 기본 타입으로 제공하지 않으므로 ArrayList 같은 제네릭 타입도 결국은 기본타입인 배열을 사용해 구현해야 한다.
> - HashMap 같은 제네릭 타입은 성능을 높일 목적으로 배열을 사용하기도 한다.

## 1. 제네릭 배열 생성 금지 제약을 우회
```java
public Stack() {
    elements = new E[DEFAULT_INITIAL_CAPACITY]; // 오류 발생
}
```
- 타입 불안전 경고
```shell script
Stack.java:7: warning: [unchecked] unchecked cast
found: Object[], required: E[]
    elements = (E[]) new Object[DEFAULT_INITIAL_CAPACITY]
```
- 비검사 형변환이 프로그램의 타입 안전성을 해치지 않음을 스스로 확인해야 한다.
    - elements 배열은 private 필드에 저장된다
    - elements 배열은 클라이언트로 반환되거나 다른 메서드에 전달되는 일이 전혀 없다.
    - push 메서드를 통해 배열에 저장되는 원소의 타입은 항상 E 다.
    - 안전함이 증명되면 범위를 최소로 좁혀 `@SuppressWarnings` 애너테이션으로 경고를 숨긴다.
  
배열을 사용한 코드를 제네릭으로 만든다.
```java
@SuppressWarnings("unchecked")
public Stack() {
    elements = (E[]) new Object[DEFAULT_INITIAL_CAPACITY];
}
```  

## 2. 필드 타입을 E[] 에서 Object[] 로 변경
```java
private Object[] elements;
```
필드 타입을 E[] 에서 Object[] 로 변경하는 방법은 오류가 발생함

`elements[--size]` 는 Object 를 반환 
```shell script
Stack.java:18: incompatible types
    found: Object, required: E
    E result = elements[--size];
```

배열이 반환한 원소를 E 로 형변환 하면 오류 대신 경고가 뜬다.
```shell script
Stack:java:19: warning: [unchecked] unchecked cast
found: Object, requried: E
      E result = (E) elements[--size];
```
실체화 불가 타입 E 는
- 컴파일러는 런타임에 이뤄지는 형변환이 안전한지 증명할 수 없다.
- @SuppressWarnings 를 붙인다.
```java
public E pop() {
    if (size == 0)
        throw new EmptyStackException();
    
    @SuppressWarnins("unchecked") 
    E result = (E) elements[--size];
    
    elements[size] = null;
    return result;
}
```

## 비교
### 첫번째 방식
- 가독성이 더 좋다.
- 배열의 타입을 E[] 로 선언 → 오직 E 타입 인스턴스만 받음을 확실히 어필함
    ```java
    private E[] elements;
    ```
- 더 간결한 코드
- 형변환을 배열 생성 시 단 한번만 해준다
- 현업에서 더 선호하는 방식이지만, 힙 오염 heap pollution 유발
    - E 가 Object 가 아닌 경우, 배열의 런타임 타입이 컴파일타임 타입과 달라 힙오염[32]을 유발

### 두번째 방식
- 배열에서 원소를 읽을 때 마다 형변환 발생
- 힙오염이 마음에 걸리는 프로그래머는 두번째 방식을 고수하기도함.

## 제네릭 Stack 을 사용하는 프로그램
명령줄 인수들을 역순으로 바꿔 대문자로 출력하는 프로그램
```java
public static void main(String[] args) {
    Stack<String> stack = new Stack<>();
    for (String args: args)
        stack.push(arg);
    while (!stack.isEmpty())
        System.out.println(stack.pop().toUpperCase());
}
```

- 명시적 형변환을 쓰지 않음
- 형변환이 항상 성공함을 보장함

## 제네릭타입의 타입 매개변수
모든 **참조 타입**
- `Stack<Object>` `Stack<int[]>` `Stack<List<String>>`, `Stack` 

기본 타입 → 컴파일 오류
- `String<int>` `Stack<double>`
- 제네릭 타입 시스템의 근본적인 문제
- 박싱된 기본 타입을 사용해 우회 가능

## 한정적 타입 매개변수 bound type parameter
타입 매개변수에 제약을 두는 제네릭 타입
```java
package java.util.concurrent.DelayQueue;
class DelayQueue<E extends Delayed> implements  BlockingQueue<E> {}
```   
타입 매개변수 목록 `<E extneds Delayed>`
- `java.util.concurrent.Delayed` 의 하위 타입만 받는다는 의미
- `DelayQueue<Delayed>` 도 가능
- 형변환 없이 Delayed 클래스의 메서드 호출 가능
