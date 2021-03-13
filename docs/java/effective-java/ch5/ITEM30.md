# ITEM30 이왕이면 제네릭 메서드로 만들라

제네릭 타입과 마찬가지로, 클라이언트에서 입력 매개변수와 반환값을 명시적으로 형변환해야하는 메서드 보다
제네릭 메서드가 더 안전하며 사용하기도 쉽다.

예시
- 매개변수화 타입을 받는 정적 유틸리티 메서드들
- Collections 의 알고리즘 메서드 binarySearch, sort 등은 모두 제네릭이다.

로 타입 사용 - unchecked call warning [26]
```java
public static Set union(Set s1, Set s2) {
    Set result = new HashSet(s1);
    result.addAll(s1);
    return result;
}
```

제네릭 메서드
```java
public static <E> Set<E> union(Set<E> s1, Set<E> s2) {
    Set<E> result = new HashSet<>(s1);
    result.addAll(s2);
    return result;
}
```

**타입매개변수 목록 `<E>`** 
- 메서드의 제한자와 반환타입 사이에 온다.

제네릭 메서드를 활용하는 간단한 프로그램
```java
public static void main(String[] args) {
    Set<String> guys = Set.of("tom", "dic", "harry");
    Set<String> stooges = Set.of("래리", "모에", "컬리");
    Set<String> aflCio = union(guys, stooges);
    System.out.println(aflCio);
}
```

한정적 와일드카드 타입[31] 을 사용하면 더 유연하게 개선가능함.

## 제네릭 싱글턴 팩터리
불변 객체를 여러 타입으로 활용할 수 있게 만들어야 할 때
- 요청한 타입 매개변수에 맞게 객체의 타입을 바꿔주는 정적 팩터리
- Collections.reverseOrder 같은 함수 객체[42] 나 Collections.emptySet 같은 컬렉션 용으로 사용한다.

```java
static final ReverseComparator REVERSE_ORDER= new ReverseComparator();
public static <T> Comparator<T> reverseOrder() {
    return (Comparator<T>) ReverseComparator.REVERSE_ORDER;
}
```

```java
public static final Set EMPTY_SET = new EmptySet<>();
public static final <T> Set<T> emptySet() {
    return (Set<T>) EMPTY_SET;
}
```

## [항등 함수](https://ko.wikipedia.org/wiki/%ED%95%AD%EB%93%B1_%ED%95%A8%EC%88%98) identity function
정의역과 공역이 같고, 모든 원소를 자기 자신으로 대응시키는 함수

항등 함수 객체는, 상태가 없으니 요청할 때 마다 새로 생성하는 것은 낭비다.

제네릭 싱글턴 팩터리 패턴
```java
private static UnaryOperator<Object> IDENTITY_FN = (t) -> t;

@SuppressWarings("unchecked")
public static <T> UnaryOperator<T> identityFunction() {
    return (UnaryOperator<T>) IDENTITY_FN;
}
```
항등 함수란 입력 값을 수정 없이 그대로 반환하기 때문에 T 가 어떤 타입이든 `(UnaryOperator<T>)` 는 안전하다.

제네릭 싱글턴을 사용하는 예
```java
public static void main(String[] args) {
    String[] strings = { "삼베", "대마", "나일론" };
    UnaryOperator<String> sameString = identityFunction();
    for (String s : strings) 
        System.out.println(sameString.apply(s));

    Number[] numbers = { 1, 2.0, 3L };
    UnaryOperator<Number> sameNumber = identityFunction();
    for (Number n : numbers) 
        System.out.println(sameNumber.apply(n));
}
```

## 재귀적 한정 recursive type bound
자신이 들어간 표현식을 사용하여, 타입 매개변수의 허용 범위를 한정함

- 주로 타입의 자연적 순서를 정하는 Comparable 인터페이스[14]와 함께 쓰인다.

```java
public interface Comparable<T> {
    int compareTo(T o);
}
```

타입 매개변수 T
- `Comparable<T>` 를 구현한 타입이 비교할 수 있는 원소 타입을 정의함.
- 실제로 거의 모든 타입은 자신과 같은 타입의 원소와만 비교할 수 있다.
- String 은 `Comparable<String>` 을 구현하고, Integer 는 `Comparable<Integer>` 를 구현하는 식임

재귀적 타입 한정을 이용해 상호 비교 할 수 있음을 표현
```java
public static <E extends Comparable<E>> max(Collection<E> c);
```

타입 한정 `<E extends Comparable<E>>`
- 모든 타입 E 는 자신과 비교할 수 있다.

재귀적 타입 한정을 사용하여 컬렉션에서 최대값을 반환
```java
public static <E extends Comparable<E>> E max(Collection<E> c) {
    if (c.isEmpty()) 
        throw new IllegalArgumentException("컬렉션이 비어 있습니다.");
    
    E result = null;
    for (E e : c) 
        if (result == null || e.compareTo(result) > 0)
            result = Objects.requireNonNull(e);
        return result;
}
```
