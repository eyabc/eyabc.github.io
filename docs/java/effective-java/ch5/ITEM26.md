---
title: 26. 로타입 raw type 은 사용하지 말라
---

:::tip
- 로타입을 사용하면 런타임 예외가 일어날 수 있으니 사용하면 안된다.
- 제네릭 도입 이전 코드와의 호환성을 위해 제공될 뿐임
:::

## 제네릭 타입 generic type

### 제네릭 클래스, 제네릭 인터페이스
클래스와 인터페이스 선언에 타입 매개변수가 쓰임

### List 인터페이스
원소타입을 나타내는 타입 매개변수 E 를 받는다.

- List 인터페이스의 완전한 이름은 `List<E>` 이다.
- 짧게 `List` 라고 자주 쓴다.

```java
public interface List<E> extends Collection<E> {
    // ..
}
```

## 매개변수화 타입
제네릭 타입은 매개변수화 타입을 정의함

:::note 매개변수화 타입
*클래스(인터페이스)이름 <실제 타입 매개변수>*
:::

`List<String>` 
- **원소의 타입이 String 인 리스트**를 뜻하는 **매개변수화 타입**
- `String`
    - **정규 (formal) 타입 매개변수 E** 에 해당
    - **실제 (actual) 타입 매개변수**

## 로타입 raw type
:::tip
제네릭 타입을 정의하면 → 딸린 로타입도 함께 정의된다.
:::

:::note raw type 의미
제네릭 타입에서 타입 매개변수를 전혀 사용하지 않는 것
:::

`List<E>` 의 로타입 → List

타입 선언에서 제네릭타입 정보가 전부 지워진 것처럼 동작함

```java
private final Collection stamps = ...;
stamps.add(new Coin(...));  // "unchecked call" 경고를 내뱉는다.
```
- Stamp 대신 Coin 을 넣어도 아무런 오류없이 컴파일 되고 실행된다.
- 컴파일러가 모호한 경고메세지를 보여주긴 한다.

#### 반복자의 로 타입 -> 런타임에 오류 발견 문제
```java
for (Iterator i = stamps.iterator(); i.hasNext(); ) {
    Stamp stamp = (Stamp) i.next(); // ClassCastException 을 던진다.
    stamp.cancel();
}
```

#### 매개변수화된 컬렉션 타입 - 타입 안전성 확보
```java
private final Collection<Stamp> stamps = ...;
```
오류는 컴파일타임에 발견하는 것이 가장 이상적이다.
- 컴파일러가 stamps 에는 Stamp 의 인스턴스만 넣어야 함을 인지
- 컴파일러는 컬렉션에서 원소를 꺼내는 모든 곳 → 보이지 않는 형변환을 추가
    - 항상 성공

### 타협점
로타입은 절대 쓰면 안되지만, 
언어차원에서는 호환성 때문에 지원하고 있다.

위험성 
- 제네릭이 안겨주는 안전성과 표현력을 모두 잃음

호환성
- 자바가 제네릭을 받아들이기까지 10년이 걸린 탓에 제네릭 없이 짠 코드가 세상을 뒤덮어 버림

## `List<Object>`
### 로타입 List 
- 사용하면 안된다.
- 제네릭 타입에서 완전히 발을 뺀 것
- `List<String>` 을 넘길 수 있다
    
### `List<Object>`
임의 객체를 허용하는 매개변수화 타입
- 사용해도 괜찮다
- 모든 타입을 허용한다는 의미를 컴파일러에 명확히 전달한 것
- `List<String>` 을 넘길 수 없다.

### 제네릭의 하위 타입 규칙
`List<String>` 
- 로타입 List 의 하위 타입 O
- `List<Object>` 의 하위타입 X → 타입 안전

#### 런타임에 실패한다 - unsafeAdd 메서드가 로타입 List 를 사용
컴파일은 되지만, 로타입 List 를 사용하여 경고발생,     
하지만 런타임에서 ClassCastException 이 발생하고야 만다.    
```java {7}
public static void main(String[] args) {
    List<String> strings = new ArrayList<>();
    unsafeAdd(strings, Integer.valueOf(42));
    String s = strings.get(0);  // ClassCastException, Integer → String
}

private statis void unsafeAdd(List list, Object o) {
    list.add(o);
}
```

List 를 매개변수화타입 `List<Object>` 로 바꾸면 컴파일 조차 되지 않게 된다.

## 비한정적 와일드카드 타입 unbounded wildcard type
:::note
제네릭 타입을 쓰고 싶지만, 실제 타입 매개변수가 무엇인지 신경쓰고 싶지 않을 때 사용함
- 어떤 타입이라도 담을 수 있는 가장 범용적인 매개변수화 타입
- `Set<E>` → `Set<?>` 
- 타입안전, 유연함
:::


잘못된 예 - 모르는 타입의 원소도 받는 로 타입을 사용함
```java
static int numElementsInCommon(Set s1, Set s2) {
    int result = 0;
    for (Object o1 : s1) 
        if (s2.contains(o1)) 
            result++;
    return result;
}
```

비한정적 와일드카드 타입 사용
```java
static int numElementsInCommon(Set<?> s1, Set<?> s2) { ... }
```

### 비한정적 와일드카드 타입과 로타입의 차이점
- 와일드카드타입 → 안전, 로타입 → 비안전

`Collection<?>`
- null 외에는 어떤 원소도 넣을 수 없다. → else 컴파일 에러
- 컬렉션에서 꺼낼 수 있는 객체의 타입도 전혀 알 수 없다.

## 로타입 규칙의 예외
### class 리터럴에는 로타입을 써야 한다.
자바 명세, class 리터럴
- 매개변수화 타입을 사용하지 못한다.
    - `List<String>.class`, `List<?>.class`
- 배열과 기본 타입만 허용한다.
    - `List.class`, `String[].class`, `int.class`
    
### instanceof 연산자
런타임에는 제네릭 타입 정보가 지워짐
- instanceof 연산자
    - 매개변수화 타입 중, 비한정적 와일드카드 타입만 사용 가능
    - 로타입, 비한정적 와일드카드 모두 똑같이 동작함
        - 로타입사용 → 코드 깔끔
 
```java
if (o instanceof Set) {
    Set<?> s = (Set<?>) o;
}
```       

## 로타입, `...<Object>`, `...<?>`
`...<Object>`
- 어떤 타입의 객체도 저장할 수 있는 매개변수화 타입

`...<?>`
- 모종의 타입 객체만 저장할 수 있는 와일드카드 타입 ??

로타입
- 제네릭 타입 시스템에 속하지 않음

`...<Object>`, `...<?>`
- 타입 안전

로타입
- 타입 불안전
