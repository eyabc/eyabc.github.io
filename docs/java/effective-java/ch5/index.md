---
title: ch5 제네릭 Generic
---
자바 5에 등장

## 제네릭 이전
- 컬렉션에서 객체를 꺼낼 때마다 형변환 필요
- 런타임에서 형변환 오류 발견

## 제네릭 이후
- 컬렉션이 담을 수 있는 타입을 컴파일러에게 알려줄 수 있음
- 컴파일러가 자동으로 형변환 코드를 추가해 줄 수 있다.
- 컴파일 과정에서 형변환 오류를 발견할 수 있다.

제네릭은 코드가 복잡해진다는 단점이 있으나, 이번 장에서 제네릭의 이점을 살리고 단점을 최소화 하는 방법을 서술한다.


| 한글 용어 | 영문 용어 | 예 | 
|---|---|---|
|매개변수화 타입 | parameterized type | `List<String>` |
|실제 타입 매개변수 | actual type parameter | `String` |
|제네릭 타입 | generic type | `List<E>` |
|정규 타입 매개변수 | formal type parameter | `E` |
|비한정적 와일드카드 타입 | unbounded wildcard type | `List<?>` |
|로타입 | raw type | `List` |
|한정적 타입 매개변수 | bounded type parameter | `<E extends Number>` |
|재귀적 타입 한정 | recursive type bound | `<T extends Comparable<T>>` |
|한정적 와일드 카드 타입 | bounded wildcard type | `List<? extends Number>` |
|제네릭 메서드 | generic method | `static <E> List<E> asList(E[] a)` |
|타입 토큰 | type token | `String.class` |
